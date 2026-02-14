import type { SVGProps } from "react";

export function MoveRight(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M18 8L22 12L18 16" /> <path d="M2 12H22" /></svg>
  );
}
