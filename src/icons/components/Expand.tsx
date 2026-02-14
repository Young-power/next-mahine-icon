import type { SVGProps } from "react";

export function Expand(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m15 15 6 6" /> <path d="m15 9 6-6" /> <path d="M21 16v5h-5" /> <path d="M21 8V3h-5" /> <path d="M3 16v5h5" /> <path d="m3 21 6-6" /> <path d="M3 8V3h5" /> <path d="M9 9 3 3" /></svg>
  );
}
