import type { SVGProps } from "react";

export function ArrowRightFromLine(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M3 5v14" /> <path d="M21 12H7" /> <path d="m15 18 6-6-6-6" /></svg>
  );
}
