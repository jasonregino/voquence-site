"use client";

import Link from "next/link";

/**
 * A link that fires a GA4 custom event on click before navigating. Lets us
 * instrument the money path (download / founding license / managed cloud /
 * checkout) from inside server components — drop this in place of an <a> or
 * <Link> and pass an `event` name.
 *
 * gtag uses sendBeacon, so the event survives the navigation that follows.
 * If GA hasn't loaded (blocked, offline), it no-ops silently.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function TrackLink({
  href,
  event,
  params,
  className,
  style,
  children,
  target,
  rel,
}: {
  href: string;
  event: string;
  params?: Record<string, unknown>;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  const fire = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", event, params ?? {});
    }
  };

  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={fire}
        className={className}
        style={style}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={fire} className={className} style={style}>
      {children}
    </Link>
  );
}
