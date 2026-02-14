import type { SVGProps } from "react";

export function Rows4(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M21 7.5H3" /> <path d="M21 12H3" /> <path d="M21 16.5H3" /></svg>
  );
}
