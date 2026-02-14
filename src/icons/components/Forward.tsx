import type { SVGProps } from "react";

export function Forward(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m15 17 5-5-5-5" /> <path d="M4 18v-2a4 4 0 0 1 4-4h12" /></svg>
  );
}
