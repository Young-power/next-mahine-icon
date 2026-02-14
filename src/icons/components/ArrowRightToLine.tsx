import type { SVGProps } from "react";

export function ArrowRightToLine(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M17 12H3" /> <path d="m11 18 6-6-6-6" /> <path d="M21 5v14" /></svg>
  );
}
