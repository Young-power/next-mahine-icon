import type { SVGProps } from "react";

export function SquarePause(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="18" height="18" x="3" y="3" rx="2" /> <line x1="10" x2="10" y1="15" y2="9" /> <line x1="14" x2="14" y1="15" y2="9" /></svg>
  );
}
