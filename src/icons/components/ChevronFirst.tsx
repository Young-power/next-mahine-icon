import type { SVGProps } from "react";

export function ChevronFirst(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m17 18-6-6 6-6" /> <path d="M7 6v12" /></svg>
  );
}
