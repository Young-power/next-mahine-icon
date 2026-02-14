import type { SVGProps } from "react";

export function UserRound(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" /></svg>
  );
}
