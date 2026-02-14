import type { SVGProps } from "react";

export function ChartLine(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="m19 9-5 5-4-4-3 3" /></svg>
  );
}
