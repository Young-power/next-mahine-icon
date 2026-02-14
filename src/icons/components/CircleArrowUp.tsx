import type { SVGProps } from "react";

export function CircleArrowUp(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="12" cy="12" r="10" /> <path d="m16 12-4-4-4 4" /> <path d="M12 16V8" /></svg>
  );
}
