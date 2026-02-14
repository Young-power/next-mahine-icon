import type { SVGProps } from "react";

export function ChartNoAxesColumnDecreasing(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M5 21V3" /> <path d="M12 21V9" /> <path d="M19 21v-6" /></svg>
  );
}
