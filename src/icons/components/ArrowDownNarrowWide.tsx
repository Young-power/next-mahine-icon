import type { SVGProps } from "react";

export function ArrowDownNarrowWide(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m3 16 4 4 4-4" /> <path d="M7 20V4" /> <path d="M11 4h4" /> <path d="M11 8h7" /> <path d="M11 12h10" /></svg>
  );
}
