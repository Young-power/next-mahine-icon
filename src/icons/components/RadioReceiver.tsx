import type { SVGProps } from "react";

export function RadioReceiver(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M5 16v2" /> <path d="M19 16v2" /> <rect width="20" height="8" x="2" y="8" rx="2" /> <path d="M18 12h.01" /></svg>
  );
}
