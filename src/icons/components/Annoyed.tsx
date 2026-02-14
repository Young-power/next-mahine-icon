import type { SVGProps } from "react";

export function Annoyed(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="12" cy="12" r="10" /> <path d="M8 15h8" /> <path d="M8 9h2" /> <path d="M14 9h2" /></svg>
  );
}
