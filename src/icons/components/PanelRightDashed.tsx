import type { SVGProps } from "react";

export function PanelRightDashed(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M15 14v1" /> <path d="M15 19v2" /> <path d="M15 3v2" /> <path d="M15 9v1" /></svg>
  );
}
