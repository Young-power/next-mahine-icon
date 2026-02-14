import type { SVGProps } from "react";

export function AppWindowMac(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="20" height="16" x="2" y="4" rx="2" /> <path d="M6 8h.01" /> <path d="M10 8h.01" /> <path d="M14 8h.01" /></svg>
  );
}
