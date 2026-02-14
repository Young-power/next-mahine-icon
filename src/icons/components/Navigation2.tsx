import type { SVGProps } from "react";

export function Navigation2(props: SVGProps<SVGSVGElement>) {
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
    > <polygon points="12 2 19 21 12 17 5 21 12 2" /></svg>
  );
}
