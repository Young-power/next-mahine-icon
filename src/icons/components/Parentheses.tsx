import type { SVGProps } from "react";

export function Parentheses(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M8 21s-4-3-4-9 4-9 4-9" /> <path d="M16 3s4 3 4 9-4 9-4 9" /></svg>
  );
}
