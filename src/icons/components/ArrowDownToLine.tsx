import type { SVGProps } from "react";

export function ArrowDownToLine(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 17V3" /> <path d="m6 11 6 6 6-6" /> <path d="M19 21H5" /></svg>
  );
}
