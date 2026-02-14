import type { SVGProps } from "react";

export function SquareArrowDownLeft(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="18" height="18" x="3" y="3" rx="2" /> <path d="m16 8-8 8" /> <path d="M16 16H8V8" /></svg>
  );
}
