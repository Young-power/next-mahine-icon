import type { SVGProps } from "react";

export function Barcode(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M3 5v14" /> <path d="M8 5v14" /> <path d="M12 5v14" /> <path d="M17 5v14" /> <path d="M21 5v14" /></svg>
  );
}
