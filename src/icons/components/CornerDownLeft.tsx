import type { SVGProps } from "react";

export function CornerDownLeft(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M20 4v7a4 4 0 0 1-4 4H4" /> <path d="m9 10-5 5 5 5" /></svg>
  );
}
