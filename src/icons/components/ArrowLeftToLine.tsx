import type { SVGProps } from "react";

export function ArrowLeftToLine(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M3 19V5" /> <path d="m13 6-6 6 6 6" /> <path d="M7 12h14" /></svg>
  );
}
