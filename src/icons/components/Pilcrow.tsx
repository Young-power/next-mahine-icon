import type { SVGProps } from "react";

export function Pilcrow(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M13 4v16" /> <path d="M17 4v16" /> <path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" /></svg>
  );
}
