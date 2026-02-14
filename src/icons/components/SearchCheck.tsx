import type { SVGProps } from "react";

export function SearchCheck(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m8 11 2 2 4-4" /> <circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" /></svg>
  );
}
