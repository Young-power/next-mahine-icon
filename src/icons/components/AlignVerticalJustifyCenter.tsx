import type { SVGProps } from "react";

export function AlignVerticalJustifyCenter(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="14" height="6" x="5" y="16" rx="2" /> <rect width="10" height="6" x="7" y="2" rx="2" /> <path d="M2 12h20" /></svg>
  );
}
