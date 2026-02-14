import type { SVGProps } from "react";

export function BookLock(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M18 6V4a2 2 0 1 0-4 0v2" /> <path d="M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" /> <rect x="12" y="6" width="8" height="5" rx="1" /></svg>
  );
}
