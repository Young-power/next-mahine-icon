import type { SVGProps } from "react";

export function ArrowUpFromLine(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m18 9-6-6-6 6" /> <path d="M12 3v14" /> <path d="M5 21h14" /></svg>
  );
}
