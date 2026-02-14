import type { SVGProps } from "react";

export function TentTree(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="4" cy="4" r="2" /> <path d="m14 5 3-3 3 3" /> <path d="m14 10 3-3 3 3" /> <path d="M17 14V2" /> <path d="M17 14H7l-5 8h20Z" /> <path d="M8 14v8" /> <path d="m9 14 5 8" /></svg>
  );
}
