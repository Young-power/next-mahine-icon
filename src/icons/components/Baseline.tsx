import type { SVGProps } from "react";

export function Baseline(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M4 20h16" /> <path d="m6 16 6-12 6 12" /> <path d="M8 12h8" /></svg>
  );
}
