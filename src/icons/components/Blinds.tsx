import type { SVGProps } from "react";

export function Blinds(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M3 3h18" /> <path d="M20 7H8" /> <path d="M20 11H8" /> <path d="M10 19h10" /> <path d="M8 15h12" /> <path d="M4 3v14" /> <circle cx="4" cy="19" r="2" /></svg>
  );
}
