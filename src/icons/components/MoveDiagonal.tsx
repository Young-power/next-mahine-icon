import type { SVGProps } from "react";

export function MoveDiagonal(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M11 19H5v-6" /> <path d="M13 5h6v6" /> <path d="M19 5 5 19" /></svg>
  );
}
