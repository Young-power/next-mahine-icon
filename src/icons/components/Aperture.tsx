import type { SVGProps } from "react";

export function Aperture(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="12" cy="12" r="10" /> <path d="m14.31 8 5.74 9.94" /> <path d="M9.69 8h11.48" /> <path d="m7.38 12 5.74-9.94" /> <path d="M9.69 16 3.95 6.06" /> <path d="M14.31 16H2.83" /> <path d="m16.62 12-5.74 9.94" /></svg>
  );
}
