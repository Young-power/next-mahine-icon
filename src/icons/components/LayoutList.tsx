import type { SVGProps } from "react";

export function LayoutList(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="7" height="7" x="3" y="3" rx="1" /> <rect width="7" height="7" x="3" y="14" rx="1" /> <path d="M14 4h7" /> <path d="M14 9h7" /> <path d="M14 15h7" /> <path d="M14 20h7" /></svg>
  );
}
