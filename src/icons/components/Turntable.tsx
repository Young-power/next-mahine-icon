import type { SVGProps } from "react";

export function Turntable(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M10 12.01h.01" /> <path d="M18 8v4a8 8 0 0 1-1.07 4" /> <circle cx="10" cy="12" r="4" /> <rect x="2" y="4" width="20" height="16" rx="2" /></svg>
  );
}
