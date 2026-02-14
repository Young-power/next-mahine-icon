import type { SVGProps } from "react";

export function MoveDownRight(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M19 13V19H13" /> <path d="M5 5L19 19" /></svg>
  );
}
