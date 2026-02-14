import type { SVGProps } from "react";

export function TextAlignStart(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M21 5H3" /> <path d="M15 12H3" /> <path d="M17 19H3" /></svg>
  );
}
