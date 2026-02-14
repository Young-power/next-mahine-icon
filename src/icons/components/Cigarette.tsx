import type { SVGProps } from "react";

export function Cigarette(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" /> <path d="M18 8c0-2.5-2-2.5-2-5" /> <path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /> <path d="M22 8c0-2.5-2-2.5-2-5" /> <path d="M7 12v4" /></svg>
  );
}
