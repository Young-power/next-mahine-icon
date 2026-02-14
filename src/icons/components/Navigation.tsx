import type { SVGProps } from "react";

export function Navigation(props: SVGProps<SVGSVGElement>) {
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
    > <polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
  );
}
