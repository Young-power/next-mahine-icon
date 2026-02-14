import type { SVGProps } from "react";

export function Dock(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M2 8h20" /> <rect width="20" height="16" x="2" y="4" rx="2" /> <path d="M6 16h12" /></svg>
  );
}
