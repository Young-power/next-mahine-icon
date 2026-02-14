import type { SVGProps } from "react";

export function CornerLeftUp(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M14 9 9 4 4 9" /> <path d="M20 20h-7a4 4 0 0 1-4-4V4" /></svg>
  );
}
