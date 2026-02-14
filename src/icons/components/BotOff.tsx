import type { SVGProps } from "react";

export function BotOff(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M13.67 8H18a2 2 0 0 1 2 2v4.33" /> <path d="M2 14h2" /> <path d="M20 14h2" /> <path d="M22 22 2 2" /> <path d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" /> <path d="M9 13v2" /> <path d="M9.67 4H12v2.33" /></svg>
  );
}
