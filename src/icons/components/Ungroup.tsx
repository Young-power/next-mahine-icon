import type { SVGProps } from "react";

export function Ungroup(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="8" height="6" x="5" y="4" rx="1" /> <rect width="8" height="6" x="11" y="14" rx="1" /></svg>
  );
}
