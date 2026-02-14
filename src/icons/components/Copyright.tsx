import type { SVGProps } from "react";

export function Copyright(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="12" cy="12" r="10" /> <path d="M14.83 14.83a4 4 0 1 1 0-5.66" /></svg>
  );
}
