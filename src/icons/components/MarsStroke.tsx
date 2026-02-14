import type { SVGProps } from "react";

export function MarsStroke(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m14 6 4 4" /> <path d="M17 3h4v4" /> <path d="m21 3-7.75 7.75" /> <circle cx="9" cy="15" r="6" /></svg>
  );
}
