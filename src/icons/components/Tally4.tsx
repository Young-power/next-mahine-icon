import type { SVGProps } from "react";

export function Tally4(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M4 4v16" /> <path d="M9 4v16" /> <path d="M14 4v16" /> <path d="M19 4v16" /></svg>
  );
}
