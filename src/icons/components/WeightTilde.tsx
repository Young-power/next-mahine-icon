import type { SVGProps } from "react";

export function WeightTilde(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z" /> <path d="M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0" /> <circle cx="12" cy="5" r="3" /></svg>
  );
}
