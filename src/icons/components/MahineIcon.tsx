import { MahineIconType } from "../../types"

export const MahineIcon: MahineIconType = ({
  width = 30,
  height = 30,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Background Circle */}
    <circle cx="128" cy="128" r="128" fill="#0f172a" />

    {/* Dotted Circle */}
    <circle
      cx="128"
      cy="128"
      r="72"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="12"
      strokeDasharray="10 14"
      strokeLinecap="round"
    />

    {/* Letter M */}
    <path
      d="M90 80h20l18 40 18-40h20v96h-18v-60l-16 36h-8l-16-36v60H90V80z"
      fill="white"
    />

    {/* Triangle (Play) */}
    <polygon
      points="190,112 220,128 190,144"
      fill="#3b82f6"
    />
  </svg>
)