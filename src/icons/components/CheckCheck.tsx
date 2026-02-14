import type { SVGProps } from "react";

export function CheckCheck(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M18 6 7 17l-5-5" /> <path d="m22 10-7.5 7.5L13 16" /></svg>
  );
}
