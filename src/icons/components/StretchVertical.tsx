import type { SVGProps } from "react";

export function StretchVertical(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="6" height="20" x="4" y="2" rx="2" /> <rect width="6" height="20" x="14" y="2" rx="2" /></svg>
  );
}
