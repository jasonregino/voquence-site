import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voquence — Voice Into Ready-To-Paste Content",
  description:
    "Most dictation apps give you a transcript. Voquence turns your voice into finished business content. Book descriptions, tweet threads, AI prompts, tech support replies. Pasted at your cursor in seconds.",
  openGraph: {
    title: "Voquence — Voice Into Ready-To-Paste Content",
    description:
      "Voice into finished business content. Book descriptions, tweet threads, AI prompts, tech support replies. Ready in seconds.",
    url: "https://voquence.com",
    siteName: "Voquence",
    type: "website",
    images: [
      {
        url: "https://voquence.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voquence — Speak Rough Ideas. Get Polished Output.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voquence — Voice Into Ready-To-Paste Content",
    description:
      "Voice into finished business content. Book descriptions, tweet threads, AI prompts, tech support replies. Ready in seconds.",
    creator: "@voquenceapp",
    images: ["https://voquence.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
