import type { SVGProps } from "react";

export function ClockPlus(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 6v6l3.644 1.822" /> <path d="M16 19h6" /> <path d="M19 16v6" /> <path d="M21.92 13.267a10 10 0 1 0-8.653 8.653" /></svg>
  );
}
