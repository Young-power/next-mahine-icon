import type { SVGProps } from "react";

export function MoveDiagonal2(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M19 13v6h-6" /> <path d="M5 11V5h6" /> <path d="m5 5 14 14" /></svg>
  );
}
