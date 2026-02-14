import type { SVGProps } from "react";

export function Mars(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M16 3h5v5" /> <path d="m21 3-6.75 6.75" /> <circle cx="10" cy="14" r="6" /></svg>
  );
}
