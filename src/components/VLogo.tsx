interface VLogoProps {
  size?: number;
  color?: string;
}

/**
 * Voquence brand mark: bold cyan V with audio waveform bars in the negative space.
 * Same design as the desktop app icon and the floating HUD.
 */
export function VLogo({ size = 96, color = "#00d4ff" }: VLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 12 10 L 30 10 L 50 62 L 70 10 L 88 10 L 56 92 L 44 92 Z"
        fill={color}
      />
      <g fill={color}>
        <rect x="38" y="38" width="3" height="14" rx="1.5" />
        <rect x="44" y="32" width="3" height="26" rx="1.5" />
        <rect x="50" y="26" width="3" height="38" rx="1.5" />
        <rect x="56" y="32" width="3" height="26" rx="1.5" />
        <rect x="62" y="38" width="3" height="14" rx="1.5" />
      </g>
    </svg>
  );
}
