import type { SVGProps } from "react";

export function ChartColumnBig(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M3 3v16a2 2 0 0 0 2 2h16" /> <rect x="15" y="5" width="4" height="12" rx="1" /> <rect x="7" y="8" width="4" height="9" rx="1" /></svg>
  );
}
