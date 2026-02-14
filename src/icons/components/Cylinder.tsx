import type { SVGProps } from "react";

export function Cylinder(props: SVGProps<SVGSVGElement>) {
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
    > <ellipse cx="12" cy="5" rx="9" ry="3" /> <path d="M3 5v14a9 3 0 0 0 18 0V5" /></svg>
  );
}
