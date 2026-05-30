interface VLogoProps {
  size?: number;
}

/**
 * Voquence brand mark — desktop app icon with the dark square background
 * removed so it floats cleanly on any page background.
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
