import type { SVGProps } from "react";

export function VenusAndMars(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M10 20h4" /> <path d="M12 16v6" /> <path d="M17 2h4v4" /> <path d="m21 2-5.46 5.46" /> <circle cx="12" cy="11" r="5" /></svg>
  );
}
