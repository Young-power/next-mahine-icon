import type { SVGProps } from "react";

export function WindArrowDown(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M10 2v8" /> <path d="M12.8 21.6A2 2 0 1 0 14 18H2" /> <path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" /> <path d="m6 6 4 4 4-4" /></svg>
  );
}
