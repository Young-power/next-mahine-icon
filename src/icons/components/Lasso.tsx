import type { SVGProps } from "react";

export function Lasso(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M3.704 14.467a10 8 0 1 1 3.115 2.375" /> <path d="M7 22a5 5 0 0 1-2-3.994" /> <circle cx="5" cy="16" r="2" /></svg>
  );
}
