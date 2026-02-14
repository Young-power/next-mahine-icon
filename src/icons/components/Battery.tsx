import type { SVGProps } from "react";

export function Battery(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M 22 14 L 22 10" /> <rect x="2" y="6" width="16" height="12" rx="2" /></svg>
  );
}
