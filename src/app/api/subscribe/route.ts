import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Basic email validation
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // If Resend is configured, add to the audience.
    if (resend && RESEND_AUDIENCE_ID) {
      try {
        const result = await resend.contacts.create({
          email: email.toLowerCase().trim(),
          audienceId: RESEND_AUDIENCE_ID,
          unsubscribed: false,
        });

        if (result.error) {
          // Resend returns an error for duplicates — treat that as success
          const msg = result.error.message?.toLowerCase() || "";
          if (msg.includes("already exists") || msg.includes("duplicate")) {
            return NextResponse.json({ ok: true, alreadySubscribed: true });
          }
          console.error("Resend error:", result.error);
          return NextResponse.json({ error: "Could not add to list" }, { status: 500 });
        }
      } catch (err) {
        console.error("Resend exception:", err);
        return NextResponse.json({ error: "Could not add to list" }, { status: 500 });
      }
    } else {
      // No Resend config yet — log the email so we don't drop signups during dev
      console.log("[Voquence] Email signup (Resend not configured):", email);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe endpoint error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
