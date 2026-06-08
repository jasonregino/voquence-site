import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Terms of Service — Voquence",
  description:
    "The rules of using Voquence: what we promise, what we don't, and how disputes are handled. Plain English.",
};

const LAST_UPDATED = "2026-06-07";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-60" />

      <SiteHeader />

      <section className="relative z-10 px-6 sm:px-12 pt-8 pb-12 max-w-3xl mx-auto w-full">
        <h1
          className="font-mono font-black mb-4"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "clamp(28px, 4vw, 40px)",
            letterSpacing: "0.18em",
          }}
        >
          TERMS OF SERVICE
        </h1>
        <p
          className="font-mono mb-10"
          style={{
            color: "var(--brand-muted)",
            fontSize: "11px",
            letterSpacing: "0.1em",
          }}
        >
          LAST UPDATED · {LAST_UPDATED.toUpperCase()}
        </p>

        <Block>
          <p>
            This is the plain-English Terms of Service for Voquence, the Mac
            dictation app at voquence.com. If you use the app or the site, you
            agree to these terms.
          </p>
          <p>
            Voquence is built and maintained by Jason Regino, a sole proprietor
            based in California, United States. &ldquo;We,&rdquo; &ldquo;us,&rdquo;
            and &ldquo;Voquence&rdquo; in these terms refer to that sole
            proprietorship. Questions about anything below:{" "}<Mail />.
          </p>
        </Block>

        <H2>1. What Voquence is</H2>
        <Block>
          <p>
            Voquence is a Mac desktop app that turns your voice into ready-to-paste
            text. It runs on Apple Silicon Macs (M1 and newer) on macOS 11 and
            above. You download it directly from voquence.com as a signed,
            notarized .dmg file. There&apos;s no Voquence account required to
            use the app.
          </p>
        </Block>

        <H2>2. Bring Your Own Keys</H2>
        <Block>
          <p>
            For the cloud-powered features (transcription via OpenAI Whisper,
            content modes via Anthropic Claude), Voquence uses{" "}
            <strong>your</strong> OpenAI and Anthropic API keys. You paste them
            into Settings. Voquence calls those services directly from your
            Mac with your keys.
          </p>
          <p>
            That means:
          </p>
          <ul className="space-y-2 pl-5 list-disc">
            <li>
              Whatever OpenAI charges you for Whisper calls and whatever
              Anthropic charges you for Claude calls is between you and them.
              Voquence doesn&apos;t markup or proxy.
            </li>
            <li>
              Your use of OpenAI and Anthropic through Voquence is governed by
              their respective terms of service in addition to these terms.
            </li>
            <li>
              Voquence can&apos;t guarantee that those services will always be
              available, accurate, or unchanged. If they break or change their
              APIs, the relevant Voquence feature may temporarily break too.
            </li>
          </ul>
          <p>
            If you turn on Local Whisper mode, transcription runs on your Mac
            and no OpenAI key is needed for that step. The content modes (Tweet
            Thread, Book Description, etc.) still require an Anthropic key
            because they call Claude.
          </p>
        </Block>

        <H2>3. The Free tier</H2>
        <Block>
          <p>
            Voquence&apos;s Free tier (Raw Transcript mode + Local Whisper
            transcription) is free to download and use forever, with no signup,
            no API key, and no payment. It runs fully offline on your Mac.
          </p>
          <p>
            &ldquo;Free forever&rdquo; means we don&apos;t plan to
            retroactively paywall what we&apos;ve already given away. If we
            ever have to change that (we don&apos;t intend to), you get prior
            notice via the in-app update and an email to anyone on the
            wishlist.
          </p>
        </Block>

        <H2>4. The Founding License (when it ships)</H2>
        <Block>
          <p>
            The Founding License is a one-time purchase that unlocks all 11
            polish + content modes (Clean Text, Eloquence, Book Description,
            Tweet Thread, Tech Support, Email Draft, Founder Mode, Marketing
            Copy, Social Post, Prompt Builder, and Poetry / Bars). The first
            100 purchases are $19; subsequent purchases are $29. The license
            is one-time, not a subscription. It includes free updates on the
            v0.3 series; a future major paid upgrade (v1.0+ or similar) may
            be offered separately at our discretion, similar to how
            superwhisper and MacWhisper handle their license generations.
          </p>
          <p>
            The polish + content modes call Anthropic&apos;s Claude API. You
            bring your own Anthropic API key for that step. Voquence does not
            mark up or proxy those calls; what Anthropic charges your key is
            between you and them (typically pennies — new accounts get $5 of
            free credit, which covers around 17,000 polishings).
          </p>
          <p>
            The Founding License is not yet purchasable as of {LAST_UPDATED}.
            When it ships, these terms will be updated with the refund window
            and purchase mechanics. Until then, nothing on this site
            constitutes an offer to sell the Founding License, and no charge
            can be made.
          </p>
        </Block>

        <H2>4a. Managed Cloud (when it ships)</H2>
        <Block>
          <p>
            Managed Cloud is a future subscription tier (~$9.99/month) that
            includes all the Founding License modes but routes Claude calls
            through Voquence&apos;s managed Anthropic account instead of
            requiring you to bring your own key. It exists for users who
            don&apos;t want to deal with key management.
          </p>
          <p>
            Managed Cloud is on the roadmap and not yet purchasable. It ships
            when the proxy backend is built. When it ships, these terms will
            be updated with the subscription specifics, including the refund
            window, fair-use cap (if any), and cancellation terms. Until
            then, nothing on this site constitutes an offer to sell Managed
            Cloud, and no charge can be made.
          </p>
        </Block>

        <H2>5. Reasonable use</H2>
        <Block>
          <p>
            Voquence is a tool. You&apos;re welcome to use it for any legal
            purpose, personal or commercial. We ask only that you:
          </p>
          <ul className="space-y-2 pl-5 list-disc">
            <li>
              Don&apos;t use Voquence to commit fraud, harass anyone, generate
              illegal content, or violate any law that applies to you.
            </li>
            <li>
              Don&apos;t reverse-engineer, decompile, or republish the Voquence
              binary as your own product. Voquence is not currently open source,
              though we may open-source components in the future.
            </li>
            <li>
              Don&apos;t attempt to circumvent license enforcement for the
              Founding License or Managed Cloud tiers when they ship.
            </li>
            <li>
              Respect OpenAI&apos;s and Anthropic&apos;s usage policies when
              using Voquence with your keys. Your account, your rules.
            </li>
          </ul>
        </Block>

        <H2>6. Intellectual property</H2>
        <Block>
          <p>
            Voquence the app, the Voquence name, the V logo, and the contents
            of voquence.com are the property of Jason Regino. You get a
            non-exclusive, non-transferable license to use the app on your Mac
            for the purpose it was built for: dictating into your own apps.
            That license ends if you uninstall, if these terms are terminated,
            or if you materially violate them.
          </p>
          <p>
            The output of Voquence (the text it produces from your voice)
            belongs to you. We have no claim on what you write with it.
          </p>
        </Block>

        <H2>7. No warranty</H2>
        <Block>
          <p>
            Voquence is provided &ldquo;as is.&rdquo; We try hard to make it
            reliable and accurate, but we can&apos;t guarantee it will be
            error-free, available at all times, or fit for every use case.
            Transcription accuracy depends on your microphone, accent, ambient
            noise, the audio Whisper sees, and other factors outside our
            control.
          </p>
          <p>
            In particular: <strong>do not rely on Voquence as the sole
            recorder of anything critical.</strong> If you&apos;re dictating a
            legal contract, a medical note, or anything where missing or
            wrong words could cause real harm, double-check the output before
            using it.
          </p>
        </Block>

        <H2>8. Limitation of liability</H2>
        <Block>
          <p>
            To the maximum extent allowed by law, Voquence and Jason Regino are
            not liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the app or the site. Our
            total liability for any direct damages, in any case, is limited to
            the amount you&apos;ve paid Voquence in the 12 months before the
            event giving rise to the claim &mdash; or $50, whichever is greater.
          </p>
          <p>
            Some jurisdictions don&apos;t allow these exclusions, so they may
            not apply to you. Where they don&apos;t, the limits are reduced to
            the minimum allowed by your local law.
          </p>
        </Block>

        <H2>9. Indemnification</H2>
        <Block>
          <p>
            If your use of Voquence causes a third-party claim against us
            (because you used it for something the terms don&apos;t allow, or
            violated someone&apos;s rights with the output), you agree to
            cover the reasonable cost of defending it.
          </p>
        </Block>

        <H2>10. Termination</H2>
        <Block>
          <p>
            You can stop using Voquence at any time by deleting it from your
            Mac. We can stop providing it at any time, including the
            voquence.com site, the auto-updater, and the Whisper model
            download &mdash; though we&apos;ll try to give notice if we plan to.
          </p>
          <p>
            If you materially violate these terms (e.g. you reverse-engineer
            and redistribute Voquence), your license to use it ends
            immediately.
          </p>
        </Block>

        <H2>11. Changes to these terms</H2>
        <Block>
          <p>
            We may update these terms. The &ldquo;last updated&rdquo; date at
            the top will move, and we&apos;ll surface a note in the changelog
            and in app release notes for material changes. Continuing to use
            Voquence after a change means you accept the updated terms.
          </p>
        </Block>

        <H2>12. Governing law</H2>
        <Block>
          <p>
            These terms are governed by the laws of the State of California,
            United States, without regard to its conflict-of-laws rules. Any
            dispute that isn&apos;t resolved by email between you and us first
            (please email{" "}<Mail />{" "}first) will be brought exclusively in the
            state or federal courts located in California.
          </p>
        </Block>

        <H2>13. Contact</H2>
        <Block>
          <p>
            Questions, takedown requests, security disclosures, refund requests,
            anything else:{" "}<Mail />. A human reads it.
          </p>
        </Block>
      </section>

      <SiteFooter />
    </main>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-mono font-black mt-10 mb-3"
      style={{
        color: "var(--brand-cyan)",
        fontSize: "14px",
        letterSpacing: "0.18em",
      }}
    >
      {children}
    </h2>
  );
}

function Block({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="space-y-3"
      style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.7 }}
    >
      {children}
    </div>
  );
}

function Mail() {
  return (
    <a
      href="mailto:support@voquence.com"
      className="underline"
      style={{ color: "var(--brand-cyan)" }}
    >
      support@voquence.com
    </a>
  );
}
