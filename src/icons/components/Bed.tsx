import type { SVGProps } from "react";

export function Bed(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M2 4v16" /> <path d="M2 8h18a2 2 0 0 1 2 2v10" /> <path d="M2 17h20" /> <path d="M6 8v9" /></svg>
  );
}
