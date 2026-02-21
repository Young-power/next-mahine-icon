import { MahineIconType } from "../../types"

export const ReactIcon: MahineIconType = ({
  width = 30,
  height = 30,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="128" cy="128" r="12" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="10" fill="none">
      <ellipse cx="128" cy="128" rx="100" ry="40" />
      <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(60 128 128)" />
      <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(120 128 128)" />
    </g>
  </svg>
)
