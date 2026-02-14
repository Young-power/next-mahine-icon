import type { SVGProps } from "react";

export function Code(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m16 18 6-6-6-6" /> <path d="m8 6-6 6 6 6" /></svg>
  );
}
