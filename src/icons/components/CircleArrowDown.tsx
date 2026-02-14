import type { SVGProps } from "react";

export function CircleArrowDown(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="12" cy="12" r="10" /> <path d="M12 8v8" /> <path d="m8 12 4 4 4-4" /></svg>
  );
}
