import type { SVGProps } from "react";

export function CaseLower(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M10 9v7" /> <path d="M14 6v10" /> <circle cx="17.5" cy="12.5" r="3.5" /> <circle cx="6.5" cy="12.5" r="3.5" /></svg>
  );
}
