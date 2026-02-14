import type { SVGProps } from "react";

export function DecimalsArrowLeft(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m13 21-3-3 3-3" /> <path d="M20 18H10" /> <path d="M3 11h.01" /> <rect x="6" y="3" width="5" height="8" rx="2.5" /></svg>
  );
}
