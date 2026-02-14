import type { SVGProps } from "react";

export function MoveUpLeft(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M5 11V5H11" /> <path d="M5 5L19 19" /></svg>
  );
}
