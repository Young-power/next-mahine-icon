import type { SVGProps } from "react";

export function ListFilter(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M2 5h20" /> <path d="M6 12h12" /> <path d="M9 19h6" /></svg>
  );
}
