import type { SVGProps } from "react";

export function MoveDownLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    > <path d="M11 19H5V13" /> <path d="M19 5L5 19" /></svg>
  );
}
