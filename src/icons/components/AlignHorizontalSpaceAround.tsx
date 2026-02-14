import type { SVGProps } from "react";

export function AlignHorizontalSpaceAround(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="6" height="10" x="9" y="7" rx="2" /> <path d="M4 22V2" /> <path d="M20 22V2" /></svg>
  );
}
