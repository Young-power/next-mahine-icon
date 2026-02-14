import type { SVGProps } from "react";

export function Form(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M4 14h6" /> <path d="M4 2h10" /> <rect x="4" y="18" width="16" height="4" rx="1" /> <rect x="4" y="6" width="16" height="4" rx="1" /></svg>
  );
}
