import type { SVGProps } from "react";

export function SquareUserRound(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M18 21a6 6 0 0 0-12 0" /> <circle cx="12" cy="11" r="4" /> <rect width="18" height="18" x="3" y="3" rx="2" /></svg>
  );
}
