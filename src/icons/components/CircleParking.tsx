import type { SVGProps } from "react";

export function CircleParking(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="12" cy="12" r="10" /> <path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></svg>
  );
}
