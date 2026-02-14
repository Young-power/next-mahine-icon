import type { SVGProps } from "react";

export function EyeClosed(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m15 18-.722-3.25" /> <path d="M2 8a10.645 10.645 0 0 0 20 0" /> <path d="m20 15-1.726-2.05" /> <path d="m4 15 1.726-2.05" /> <path d="m9 18 .722-3.25" /></svg>
  );
}
