import type { SVGProps } from "react";

export function CirclePoundSterling(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M10 16V9.5a1 1 0 0 1 5 0" /> <path d="M8 12h4" /> <path d="M8 16h7" /> <circle cx="12" cy="12" r="10" /></svg>
  );
}
