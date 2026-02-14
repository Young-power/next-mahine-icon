import type { SVGProps } from "react";

export function GitBranchMinus(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M15 6a9 9 0 0 0-9 9V3" /> <path d="M21 18h-6" /> <circle cx="18" cy="6" r="3" /> <circle cx="6" cy="18" r="3" /></svg>
  );
}
