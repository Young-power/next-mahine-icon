import type { SVGProps } from "react";

export function SquareSquare(props: SVGProps<SVGSVGElement>) {
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
    > <rect x="3" y="3" width="18" height="18" rx="2" /> <rect x="8" y="8" width="8" height="8" rx="1" /></svg>
  );
}
