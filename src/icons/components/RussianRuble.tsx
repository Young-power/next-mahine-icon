import type { SVGProps } from "react";

export function RussianRuble(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M6 11h8a4 4 0 0 0 0-8H9v18" /> <path d="M6 15h8" /></svg>
  );
}
