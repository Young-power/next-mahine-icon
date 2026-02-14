import type { SVGProps } from "react";

export function TextAlignCenter(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M21 5H3" /> <path d="M17 12H7" /> <path d="M19 19H5" /></svg>
  );
}
