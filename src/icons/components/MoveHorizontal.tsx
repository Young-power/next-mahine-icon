import type { SVGProps } from "react";

export function MoveHorizontal(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m18 8 4 4-4 4" /> <path d="M2 12h20" /> <path d="m6 8-4 4 4 4" /></svg>
  );
}
