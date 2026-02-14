import type { SVGProps } from "react";

export function TableCellsSplit(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 15V9" /> <path d="M3 15h18" /> <path d="M3 9h18" /> <rect width="18" height="18" x="3" y="3" rx="2" /></svg>
  );
}
