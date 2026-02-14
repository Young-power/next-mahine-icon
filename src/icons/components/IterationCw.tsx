import type { SVGProps } from "react";

export function IterationCw(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M4 10a8 8 0 1 1 8 8H4" /> <path d="m8 22-4-4 4-4" /></svg>
  );
}
