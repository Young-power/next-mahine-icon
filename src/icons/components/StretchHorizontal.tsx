import type { SVGProps } from "react";

export function StretchHorizontal(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="20" height="6" x="2" y="4" rx="2" /> <rect width="20" height="6" x="2" y="14" rx="2" /></svg>
  );
}
