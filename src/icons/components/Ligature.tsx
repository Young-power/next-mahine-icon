import type { SVGProps } from "react";

export function Ligature(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M14 12h2v8" /> <path d="M14 20h4" /> <path d="M6 12h4" /> <path d="M6 20h4" /> <path d="M8 20V8a4 4 0 0 1 7.464-2" /></svg>
  );
}
