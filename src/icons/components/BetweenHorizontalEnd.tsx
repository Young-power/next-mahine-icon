import type { SVGProps } from "react";

export function BetweenHorizontalEnd(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="13" height="7" x="3" y="3" rx="1" /> <path d="m22 15-3-3 3-3" /> <rect width="13" height="7" x="3" y="14" rx="1" /></svg>
  );
}
