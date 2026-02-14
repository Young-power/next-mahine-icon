import type { SVGProps } from "react";

export function ChevronsUp(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m17 11-5-5-5 5" /> <path d="m17 18-5-5-5 5" /></svg>
  );
}
