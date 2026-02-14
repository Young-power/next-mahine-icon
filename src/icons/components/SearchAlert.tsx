import type { SVGProps } from "react";

export function SearchAlert(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" /> <path d="M11 7v4" /> <path d="M11 15h.01" /></svg>
  );
}
