import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-DTPGZHLLPX";

export const metadata: Metadata = {
  title: "Voquence · Voice Into Ready-To-Paste Content",
  description:
    "Most dictation apps give you a transcript. Voquence turns your voice into finished business content. Book descriptions, tweet threads, AI prompts, tech support replies. Pasted at your cursor in seconds.",
  openGraph: {
    title: "Voquence · Voice Into Ready-To-Paste Content",
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
        alt: "Voquence · Speak Rough Ideas. Get Polished Output.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voquence · Voice Into Ready-To-Paste Content",
    description:
      "Voice into finished business content. Book descriptions, tweet threads, AI prompts, tech support replies. Ready in seconds.",
    creator: "@voquenceapp",
    images: ["https://voquence.com/og-image.png"],
  },
  verification: {
    google: "TN-YsP_n6b9L6V4_zojM5qaeyIP9AriVBv5YW6aApmI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
