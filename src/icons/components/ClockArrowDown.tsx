import type { SVGProps } from "react";

export function ClockArrowDown(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 6v6l2 1" /> <path d="M12.337 21.994a10 10 0 1 1 9.588-8.767" /> <path d="m14 18 4 4 4-4" /> <path d="M18 14v8" /></svg>
  );
}
