import type { SVGProps } from "react";

export function Microwave(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="20" height="15" x="2" y="4" rx="2" /> <rect width="8" height="7" x="6" y="8" rx="1" /> <path d="M18 8v7" /> <path d="M6 19v2" /> <path d="M18 19v2" /></svg>
  );
}
