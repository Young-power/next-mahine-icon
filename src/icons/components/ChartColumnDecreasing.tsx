import type { SVGProps } from "react";

export function ChartColumnDecreasing(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M13 17V9" /> <path d="M18 17v-3" /> <path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="M8 17V5" /></svg>
  );
}
