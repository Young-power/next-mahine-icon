import type { SVGProps } from "react";

export function TableProperties(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M15 3v18" /> <rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M21 9H3" /> <path d="M21 15H3" /></svg>
  );
}
