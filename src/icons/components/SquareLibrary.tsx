import type { SVGProps } from "react";

export function SquareLibrary(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M7 7v10" /> <path d="M11 7v10" /> <path d="m15 7 2 10" /></svg>
  );
}
