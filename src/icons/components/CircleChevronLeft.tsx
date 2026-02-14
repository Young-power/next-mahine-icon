import type { SVGProps } from "react";

export function CircleChevronLeft(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="12" cy="12" r="10" /> <path d="m14 16-4-4 4-4" /></svg>
  );
}
