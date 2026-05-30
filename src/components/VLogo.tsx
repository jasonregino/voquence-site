interface VLogoProps {
  size?: number;
  color?: string;
}

/**
 * Voquence brand mark. Thick, chunky V with a vertical waveform stack inside.
 * Rendered as transparent SVG so it floats on any page background — no baked
 * gray square. Same design language as the desktop app icon.
 */
export function VLogo({ size = 96, color = "#00d4ff" }: VLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Thicker V — wider arms, no inner cut-out */}
      <path
        d="M 8 8 L 32 8 L 50 56 L 68 8 L 92 8 L 58 96 L 42 96 Z"
        fill={color}
      />
      {/* Waveform stack inside the V */}
      <g fill="#000000">
        <rect x="40" y="36" width="3.5" height="14" rx="1.5" />
        <rect x="46" y="28" width="3.5" height="30" rx="1.5" />
        <rect x="52" y="22" width="3.5" height="42" rx="1.5" />
        <rect x="58" y="28" width="3.5" height="30" rx="1.5" />
        <rect x="64" y="36" width="3.5" height="14" rx="1.5" />
      </g>
    </svg>
  );
}
