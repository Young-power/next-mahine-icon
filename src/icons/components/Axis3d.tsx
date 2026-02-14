import type { SVGProps } from "react";

export function Axis3d(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M13.5 10.5 15 9" /> <path d="M4 4v15a1 1 0 0 0 1 1h15" /> <path d="M4.293 19.707 6 18" /> <path d="m9 15 1.5-1.5" /></svg>
  );
}
