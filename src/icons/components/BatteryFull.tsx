import type { SVGProps } from "react";

export function BatteryFull(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M10 10v4" /> <path d="M14 10v4" /> <path d="M22 14v-4" /> <path d="M6 10v4" /> <rect x="2" y="6" width="16" height="12" rx="2" /></svg>
  );
}
