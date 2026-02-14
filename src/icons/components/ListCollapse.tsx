import type { SVGProps } from "react";

export function ListCollapse(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M10 5h11" /> <path d="M10 12h11" /> <path d="M10 19h11" /> <path d="m3 10 3-3-3-3" /> <path d="m3 20 3-3-3-3" /></svg>
  );
}
