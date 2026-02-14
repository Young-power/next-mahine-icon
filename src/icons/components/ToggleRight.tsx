import type { SVGProps } from "react";

export function ToggleRight(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="15" cy="12" r="3" /> <rect width="20" height="14" x="2" y="5" rx="7" /></svg>
  );
}
