import type { SVGProps } from "react";

export function Variable(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M8 21s-4-3-4-9 4-9 4-9" /> <path d="M16 3s4 3 4 9-4 9-4 9" /> <line x1="15" x2="9" y1="9" y2="15" /> <line x1="9" x2="15" y1="9" y2="15" /></svg>
  );
}
