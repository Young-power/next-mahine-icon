import type { SVGProps } from "react";

export function Dice6(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <path d="M16 8h.01" /> <path d="M16 12h.01" /> <path d="M16 16h.01" /> <path d="M8 8h.01" /> <path d="M8 12h.01" /> <path d="M8 16h.01" /></svg>
  );
}
