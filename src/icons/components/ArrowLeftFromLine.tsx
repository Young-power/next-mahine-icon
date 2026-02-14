import type { SVGProps } from "react";

export function ArrowLeftFromLine(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m9 6-6 6 6 6" /> <path d="M3 12h14" /> <path d="M21 19V5" /></svg>
  );
}
