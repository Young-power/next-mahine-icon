import type { SVGProps } from "react";

export function Tornado(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M21 4H3" /> <path d="M18 8H6" /> <path d="M19 12H9" /> <path d="M16 16h-6" /> <path d="M11 20H9" /></svg>
  );
}
