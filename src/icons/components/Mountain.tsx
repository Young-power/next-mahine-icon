import type { SVGProps } from "react";

export function Mountain(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m8 3 4 8 5-5 5 15H2L8 3z" /></svg>
  );
}
