import type { SVGProps } from "react";

export function AlignEndHorizontal(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="6" height="16" x="4" y="2" rx="2" /> <rect width="6" height="9" x="14" y="9" rx="2" /> <path d="M22 22H2" /></svg>
  );
}
