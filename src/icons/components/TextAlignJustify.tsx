import type { SVGProps } from "react";

export function TextAlignJustify(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M3 5h18" /> <path d="M3 12h18" /> <path d="M3 19h18" /></svg>
  );
}
