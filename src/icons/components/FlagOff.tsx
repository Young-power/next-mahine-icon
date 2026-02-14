import type { SVGProps } from "react";

export function FlagOff(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" /> <path d="m2 2 20 20" /> <path d="M4 22V4" /> <path d="M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" /></svg>
  );
}
