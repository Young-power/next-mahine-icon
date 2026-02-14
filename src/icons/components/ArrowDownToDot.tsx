import type { SVGProps } from "react";

export function ArrowDownToDot(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 2v14" /> <path d="m19 9-7 7-7-7" /> <circle cx="12" cy="21" r="1" /></svg>
  );
}
