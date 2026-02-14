import type { SVGProps } from "react";

export function Brackets(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" /> <path d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" /></svg>
  );
}
