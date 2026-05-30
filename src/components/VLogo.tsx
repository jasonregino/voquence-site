interface VLogoProps {
  size?: number;
}

/**
 * Voquence brand mark. Uses the real desktop app icon PNG so the website,
 * social profiles, and the Mac app all show the exact same logo.
 */
export function VLogo({ size = 96 }: VLogoProps) {
  return (
    <img
      src="/voquence-icon.png"
      alt="Voquence"
      width={size}
      height={size}
      style={{ display: "block", borderRadius: size * 0.22 }}
    />
  );
}
