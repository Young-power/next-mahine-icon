import type { SVGProps } from "react";

export function PoundSterling(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M18 7c0-5.333-8-5.333-8 0" /> <path d="M10 7v14" /> <path d="M6 21h12" /> <path d="M6 13h10" /></svg>
  );
}
