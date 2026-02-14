import type { SVGProps } from "react";

export function RotateCcwKey(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m14.5 9.5 1 1" /> <path d="m15.5 8.5-4 4" /> <path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" /> <circle cx="10" cy="14" r="2" /></svg>
  );
}
