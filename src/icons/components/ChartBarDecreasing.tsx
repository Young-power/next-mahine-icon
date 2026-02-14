import type { SVGProps } from "react";

export function ChartBarDecreasing(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="M7 11h8" /> <path d="M7 16h3" /> <path d="M7 6h12" /></svg>
  );
}
