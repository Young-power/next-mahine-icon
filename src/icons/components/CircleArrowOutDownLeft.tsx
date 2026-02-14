import type { SVGProps } from "react";

export function CircleArrowOutDownLeft(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M2 12a10 10 0 1 1 10 10" /> <path d="m2 22 10-10" /> <path d="M8 22H2v-6" /></svg>
  );
}
