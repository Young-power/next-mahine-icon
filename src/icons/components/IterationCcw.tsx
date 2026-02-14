import type { SVGProps } from "react";

export function IterationCcw(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m16 14 4 4-4 4" /> <path d="M20 10a8 8 0 1 0-8 8h8" /></svg>
  );
}
