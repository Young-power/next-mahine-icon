import type { SVGProps } from "react";

export function Blend(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="9" cy="9" r="7" /> <circle cx="15" cy="15" r="7" /></svg>
  );
}
