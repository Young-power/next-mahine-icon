import type { SVGProps } from "react";

export function ChevronsLeftRight(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m9 7-5 5 5 5" /> <path d="m15 7 5 5-5 5" /></svg>
  );
}
