import type { SVGProps } from "react";

export function Scooter(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M21 4h-3.5l2 11.05" /> <path d="M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009" /> <circle cx="19.5" cy="17.5" r="2.5" /> <circle cx="4.5" cy="17.5" r="2.5" /></svg>
  );
}
