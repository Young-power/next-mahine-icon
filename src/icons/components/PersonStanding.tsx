import type { SVGProps } from "react";

export function PersonStanding(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="12" cy="5" r="1" /> <path d="m9 20 3-6 3 6" /> <path d="m6 8 6 2 6-2" /> <path d="M12 10v4" /></svg>
  );
}
