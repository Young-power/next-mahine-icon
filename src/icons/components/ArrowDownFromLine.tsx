import type { SVGProps } from "react";

export function ArrowDownFromLine(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M19 3H5" /> <path d="M12 21V7" /> <path d="m6 15 6 6 6-6" /></svg>
  );
}
