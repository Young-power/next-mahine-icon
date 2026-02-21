import { MahineIconType } from "../../types"

export const CodeIcon: MahineIconType = ({
  width = 30,
  height = 30,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Chevron gauche */}
    <polyline points="8 9 4 12 8 15" />
    
    {/* Barre penchée */}
    <line x1="12" y1="6" x2="12" y2="18" transform="rotate(25 12 12)" />
    
    {/* Chevron droit */}
    <polyline points="16 9 20 12 16 15" />
  </svg>
)
