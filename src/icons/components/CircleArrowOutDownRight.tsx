import type { SVGProps } from "react";

export function CircleArrowOutDownRight(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 22a10 10 0 1 1 10-10" /> <path d="M22 22 12 12" /> <path d="M22 16v6h-6" /></svg>
  );
}
