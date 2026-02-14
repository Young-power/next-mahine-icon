import type { SVGProps } from "react";

export function Rainbow(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M22 17a10 10 0 0 0-20 0" /> <path d="M6 17a6 6 0 0 1 12 0" /> <path d="M10 17a2 2 0 0 1 4 0" /></svg>
  );
}
