import type { SVGProps } from "react";

export function Anchor(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 6v16" /> <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" /> <path d="M9 11h6" /> <circle cx="12" cy="4" r="2" /></svg>
  );
}
