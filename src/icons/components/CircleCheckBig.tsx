import type { SVGProps } from "react";

export function CircleCheckBig(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M21.801 10A10 10 0 1 1 17 3.335" /> <path d="m9 11 3 3L22 4" /></svg>
  );
}
