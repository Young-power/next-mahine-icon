import type { SVGProps } from "react";

export function Framer(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" /></svg>
  );
}
