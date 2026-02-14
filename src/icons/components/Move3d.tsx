import type { SVGProps } from "react";

export function Move3d(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M5 3v16h16" /> <path d="m5 19 6-6" /> <path d="m2 6 3-3 3 3" /> <path d="m18 16 3 3-3 3" /></svg>
  );
}
