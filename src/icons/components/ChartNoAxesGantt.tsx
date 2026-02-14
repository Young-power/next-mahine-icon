import type { SVGProps } from "react";

export function ChartNoAxesGantt(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M6 5h12" /> <path d="M4 12h10" /> <path d="M12 19h8" /></svg>
  );
}
