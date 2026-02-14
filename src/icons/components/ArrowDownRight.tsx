import type { SVGProps } from "react";

export function ArrowDownRight(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m7 7 10 10" /> <path d="M17 7v10H7" /></svg>
  );
}
