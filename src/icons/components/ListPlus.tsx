import type { SVGProps } from "react";

export function ListPlus(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M16 5H3" /> <path d="M11 12H3" /> <path d="M16 19H3" /> <path d="M18 9v6" /> <path d="M21 12h-6" /></svg>
  );
}
