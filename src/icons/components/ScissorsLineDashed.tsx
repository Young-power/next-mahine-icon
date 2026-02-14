import type { SVGProps } from "react";

export function ScissorsLineDashed(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M5.42 9.42 8 12" /> <circle cx="4" cy="8" r="2" /> <path d="m14 6-8.58 8.58" /> <circle cx="4" cy="16" r="2" /> <path d="M10.8 14.8 14 18" /> <path d="M16 12h-2" /> <path d="M22 12h-2" /></svg>
  );
}
