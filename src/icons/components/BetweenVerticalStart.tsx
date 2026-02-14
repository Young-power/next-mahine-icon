import type { SVGProps } from "react";

export function BetweenVerticalStart(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="7" height="13" x="3" y="8" rx="1" /> <path d="m15 2-3 3-3-3" /> <rect width="7" height="13" x="14" y="8" rx="1" /></svg>
  );
}
