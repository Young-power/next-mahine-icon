import type { SVGProps } from "react";

export function Calendar1(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M11 14h1v4" /> <path d="M16 2v4" /> <path d="M3 10h18" /> <path d="M8 2v4" /> <rect x="3" y="4" width="18" height="18" rx="2" /></svg>
  );
}
