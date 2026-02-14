import type { SVGProps } from "react";

export function AlignVerticalDistributeStart(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="14" height="6" x="5" y="14" rx="2" /> <rect width="10" height="6" x="7" y="4" rx="2" /> <path d="M2 14h20" /> <path d="M2 4h20" /></svg>
  );
}
