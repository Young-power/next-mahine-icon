import type { SVGProps } from "react";

export function CloudAlert(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 12v4" /> <path d="M12 20h.01" /> <path d="M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708" /></svg>
  );
}
