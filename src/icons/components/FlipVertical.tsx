import type { SVGProps } from "react";

export function FlipVertical(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" /> <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" /> <path d="M4 12H2" /> <path d="M10 12H8" /> <path d="M16 12h-2" /> <path d="M22 12h-2" /></svg>
  );
}
