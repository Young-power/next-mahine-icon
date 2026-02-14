import type { SVGProps } from "react";

export function CheckLine(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M20 4L9 15" /> <path d="M21 19L3 19" /> <path d="M9 15L4 10" /></svg>
  );
}
