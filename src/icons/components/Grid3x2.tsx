import type { SVGProps } from "react";

export function Grid3x2(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M15 3v18" /> <path d="M3 12h18" /> <path d="M9 3v18" /> <rect x="3" y="3" width="18" height="18" rx="2" /></svg>
  );
}
