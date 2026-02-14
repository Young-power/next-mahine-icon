import type { SVGProps } from "react";

export function CornerRightUp(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m10 9 5-5 5 5" /> <path d="M4 20h7a4 4 0 0 0 4-4V4" /></svg>
  );
}
