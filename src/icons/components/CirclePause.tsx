import type { SVGProps } from "react";

export function CirclePause(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="12" cy="12" r="10" /> <line x1="10" x2="10" y1="15" y2="9" /> <line x1="14" x2="14" y1="15" y2="9" /></svg>
  );
}
