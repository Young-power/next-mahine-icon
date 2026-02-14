import type { SVGProps } from "react";

export function SquareRadical(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M7 12h2l2 5 2-10h4" /> <rect x="3" y="3" width="18" height="18" rx="2" /></svg>
  );
}
