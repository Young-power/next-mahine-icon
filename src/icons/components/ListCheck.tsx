import type { SVGProps } from "react";

export function ListCheck(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M16 5H3" /> <path d="M16 12H3" /> <path d="M11 19H3" /> <path d="m15 18 2 2 4-4" /></svg>
  );
}
