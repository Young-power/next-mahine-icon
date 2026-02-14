import type { SVGProps } from "react";

export function AlignEndVertical(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="16" height="6" x="2" y="4" rx="2" /> <rect width="9" height="6" x="9" y="14" rx="2" /> <path d="M22 22V2" /></svg>
  );
}
