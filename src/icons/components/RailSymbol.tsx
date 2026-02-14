import type { SVGProps } from "react";

export function RailSymbol(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M5 15h14" /> <path d="M5 9h14" /> <path d="m14 20-5-5 6-6-5-5" /></svg>
  );
}
