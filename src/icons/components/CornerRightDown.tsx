import type { SVGProps } from "react";

export function CornerRightDown(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m10 15 5 5 5-5" /> <path d="M4 4h7a4 4 0 0 1 4 4v12" /></svg>
  );
}
