import type { SVGProps } from "react";

export function CircleArrowOutUpRight(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M22 12A10 10 0 1 1 12 2" /> <path d="M22 2 12 12" /> <path d="M16 2h6v6" /></svg>
  );
}
