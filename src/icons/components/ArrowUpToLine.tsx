import type { SVGProps } from "react";

export function ArrowUpToLine(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M5 3h14" /> <path d="m18 13-6-6-6 6" /> <path d="M12 7v14" /></svg>
  );
}
