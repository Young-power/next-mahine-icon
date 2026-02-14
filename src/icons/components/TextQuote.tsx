import type { SVGProps } from "react";

export function TextQuote(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M17 5H3" /> <path d="M21 12H8" /> <path d="M21 19H8" /> <path d="M3 12v7" /></svg>
  );
}
