import type { SVGProps } from "react";

export function ChevronsDownUp(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m7 20 5-5 5 5" /> <path d="m7 4 5 5 5-5" /></svg>
  );
}
