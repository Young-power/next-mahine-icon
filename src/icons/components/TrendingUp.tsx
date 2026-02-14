import type { SVGProps } from "react";

export function TrendingUp(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M16 7h6v6" /> <path d="m22 7-8.5 8.5-5-5L2 17" /></svg>
  );
}
