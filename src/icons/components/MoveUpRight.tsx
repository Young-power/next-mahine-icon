import type { SVGProps } from "react";

export function MoveUpRight(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M13 5H19V11" /> <path d="M19 5L5 19" /></svg>
  );
}
