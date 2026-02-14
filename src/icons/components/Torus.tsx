import type { SVGProps } from "react";

export function Torus(props: SVGProps<SVGSVGElement>) {
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
    > <ellipse cx="12" cy="11" rx="3" ry="2" /> <ellipse cx="12" cy="12.5" rx="10" ry="8.5" /></svg>
  );
}
