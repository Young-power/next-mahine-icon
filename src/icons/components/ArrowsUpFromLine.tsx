import type { SVGProps } from "react";

export function ArrowsUpFromLine(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m4 6 3-3 3 3" /> <path d="M7 17V3" /> <path d="m14 6 3-3 3 3" /> <path d="M17 17V3" /> <path d="M4 21h16" /></svg>
  );
}
