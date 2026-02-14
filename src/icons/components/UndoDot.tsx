import type { SVGProps } from "react";

export function UndoDot(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M21 17a9 9 0 0 0-15-6.7L3 13" /> <path d="M3 7v6h6" /> <circle cx="12" cy="17" r="1" /></svg>
  );
}
