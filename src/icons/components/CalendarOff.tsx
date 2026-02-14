import type { SVGProps } from "react";

export function CalendarOff(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" /> <path d="M21 15.5V6a2 2 0 0 0-2-2H9.5" /> <path d="M16 2v4" /> <path d="M3 10h7" /> <path d="M21 10h-5.5" /> <path d="m2 2 20 20" /></svg>
  );
}
