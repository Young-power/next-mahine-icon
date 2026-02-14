import type { SVGProps } from "react";

export function ChevronsRight(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m6 17 5-5-5-5" /> <path d="m13 17 5-5-5-5" /></svg>
  );
}
