import type { SVGProps } from "react";

export function CalendarArrowUp(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m14 18 4-4 4 4" /> <path d="M16 2v4" /> <path d="M18 22v-8" /> <path d="M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" /> <path d="M3 10h18" /> <path d="M8 2v4" /></svg>
  );
}
