import type { SVGProps } from "react";

export function RectangleCircle(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" /> <circle cx="14" cy="12" r="8" /></svg>
  );
}
