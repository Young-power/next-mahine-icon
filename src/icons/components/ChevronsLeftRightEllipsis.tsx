import type { SVGProps } from "react";

export function ChevronsLeftRightEllipsis(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 12h.01" /> <path d="M16 12h.01" /> <path d="m17 7 5 5-5 5" /> <path d="m7 7-5 5 5 5" /> <path d="M8 12h.01" /></svg>
  );
}
