import type { SVGProps } from "react";

export function SeparatorHorizontal(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m16 16-4 4-4-4" /> <path d="M3 12h18" /> <path d="m8 8 4-4 4 4" /></svg>
  );
}
