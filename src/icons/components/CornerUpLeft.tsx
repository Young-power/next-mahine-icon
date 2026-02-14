import type { SVGProps } from "react";

export function CornerUpLeft(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M20 20v-7a4 4 0 0 0-4-4H4" /> <path d="M9 14 4 9l5-5" /></svg>
  );
}
