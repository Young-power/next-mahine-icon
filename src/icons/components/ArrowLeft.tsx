import type { SVGProps } from "react";

export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m12 19-7-7 7-7" /> <path d="M19 12H5" /></svg>
  );
}
