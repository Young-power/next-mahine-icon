import type { SVGProps } from "react";

export function BookKey(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m19 3 1 1" /> <path d="m20 2-4.5 4.5" /> <path d="M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844" /> <circle cx="14" cy="8" r="2" /></svg>
  );
}
