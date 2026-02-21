import { MahineIconType } from "../../types"

export const NextjsIcon: MahineIconType = ({
  width = 30,
  height = 30,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 256 256"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M128 0C57 0 0 57 0 128s57 128 128 128 128-57 128-128S199 0 128 0zM96 64l64 128h-24l-64-128h24zm40 0h24v128h-24V64z"/>
  </svg>
)
