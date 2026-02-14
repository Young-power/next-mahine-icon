import type { SVGProps } from "react";

export function PhilippinePeso(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M20 11H4" /> <path d="M20 7H4" /> <path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" /></svg>
  );
}
