import type { SVGProps } from "react";

export function CircleGauge(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" /> <circle cx="12" cy="12" r="2" /> <path d="M13.4 10.6 19 5" /></svg>
  );
}
