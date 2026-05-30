interface VLogoProps {
  size?: number;
}

/**
 * Voquence brand mark — the actual desktop app icon PNG.
 * mix-blend-mode: lighten blends the icon's dark background with the page
 * so the rounded-square edge disappears on dark pages.
 */
export function VLogo({ size = 96 }: VLogoProps) {
  return (
    <img
      src="/voquence-icon.png"
      alt="Voquence"
      width={size}
      height={size}
      style={{
        display: "block",
        mixBlendMode: "lighten",
      }}
    />
  );
}
