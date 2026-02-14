import type { SVGProps } from "react";

export function Antenna(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M2 12 7 2" /> <path d="m7 12 5-10" /> <path d="m12 12 5-10" /> <path d="m17 12 5-10" /> <path d="M4.5 7h15" /> <path d="M12 16v6" /></svg>
  );
}
