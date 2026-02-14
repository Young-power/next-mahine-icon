import type { SVGProps } from "react";

export function Orbit(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" /> <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" /> <circle cx="12" cy="12" r="3" /> <circle cx="19" cy="5" r="2" /> <circle cx="5" cy="19" r="2" /></svg>
  );
}
