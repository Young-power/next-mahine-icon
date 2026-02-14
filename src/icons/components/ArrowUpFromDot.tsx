import type { SVGProps } from "react";

export function ArrowUpFromDot(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m5 9 7-7 7 7" /> <path d="M12 16V2" /> <circle cx="12" cy="21" r="1" /></svg>
  );
}
