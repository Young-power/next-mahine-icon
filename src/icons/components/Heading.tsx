import type { SVGProps } from "react";

export function Heading(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M6 12h12" /> <path d="M6 20V4" /> <path d="M18 20V4" /></svg>
  );
}
