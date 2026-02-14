import type { SVGProps } from "react";

export function ChartGantt(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M10 6h8" /> <path d="M12 16h6" /> <path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="M8 11h7" /></svg>
  );
}
