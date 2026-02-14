import type { SVGProps } from "react";

export function SpellCheck(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m6 16 6-12 6 12" /> <path d="M8 12h8" /> <path d="m16 20 2 2 4-4" /></svg>
  );
}
