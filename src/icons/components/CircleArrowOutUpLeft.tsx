import type { SVGProps } from "react";

export function CircleArrowOutUpLeft(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M2 8V2h6" /> <path d="m2 2 10 10" /> <path d="M12 2A10 10 0 1 1 2 12" /></svg>
  );
}
