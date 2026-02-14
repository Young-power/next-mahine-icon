import type { SVGProps } from "react";

export function CalendarPlus(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M16 19h6" /> <path d="M16 2v4" /> <path d="M19 16v6" /> <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" /> <path d="M3 10h18" /> <path d="M8 2v4" /></svg>
  );
}
