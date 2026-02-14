import type { SVGProps } from "react";

export function SwissFranc(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M10 21V3h8" /> <path d="M6 16h9" /> <path d="M10 9.5h7" /></svg>
  );
}
