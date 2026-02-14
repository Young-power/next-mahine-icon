import type { SVGProps } from "react";

export function TextSearch(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M21 5H3" /> <path d="M10 12H3" /> <path d="M10 19H3" /> <circle cx="17" cy="15" r="3" /> <path d="m21 19-1.9-1.9" /></svg>
  );
}
