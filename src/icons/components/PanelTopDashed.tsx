import type { SVGProps } from "react";

export function PanelTopDashed(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M14 9h1" /> <path d="M19 9h2" /> <path d="M3 9h2" /> <path d="M9 9h1" /></svg>
  );
}
