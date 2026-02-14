import type { SVGProps } from "react";

export function VectorSquare(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M19.5 7a24 24 0 0 1 0 10" /> <path d="M4.5 7a24 24 0 0 0 0 10" /> <path d="M7 19.5a24 24 0 0 0 10 0" /> <path d="M7 4.5a24 24 0 0 1 10 0" /> <rect x="17" y="17" width="5" height="5" rx="1" /> <rect x="17" y="2" width="5" height="5" rx="1" /> <rect x="2" y="17" width="5" height="5" rx="1" /> <rect x="2" y="2" width="5" height="5" rx="1" /></svg>
  );
}
