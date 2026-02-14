import type { SVGProps } from "react";

export function Diff(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 3v14" /> <path d="M5 10h14" /> <path d="M5 21h14" /></svg>
  );
}
