/* eslint-disable @next/next/no-img-element */
interface VLogoProps {
  size?: number;
}

/**
 * Voquence brand mark. Uses the polished PNG icon (same source as the desktop
 * app icon and the X/Instagram profile picture) for visual consistency across
 * all Voquence surfaces.
 */
export function VLogo({ size = 96 }: VLogoProps) {
  return (
    <img
      src="/voquence-icon.png"
      alt="Voquence"
      width={size}
      height={size}
      style={{ display: "block" }}
    />
  );
}
