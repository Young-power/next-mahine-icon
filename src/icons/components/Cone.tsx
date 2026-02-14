import type { SVGProps } from "react";

export function Cone(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" /> <ellipse cx="12" cy="19" rx="9" ry="3" /></svg>
  );
}
