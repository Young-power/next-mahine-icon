import type { SVGProps } from "react";

export function TrendingDown(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M16 17h6v-6" /> <path d="m22 17-8.5-8.5-5 5L2 7" /></svg>
  );
}
