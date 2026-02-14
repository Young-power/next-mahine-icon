import type { SVGProps } from "react";

export function Search(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" /></svg>
  );
}
