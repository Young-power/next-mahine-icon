import type { SVGProps } from "react";

export function SquareX(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <path d="m15 9-6 6" /> <path d="m9 9 6 6" /></svg>
  );
}
