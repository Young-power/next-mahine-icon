import type { SVGProps } from "react";

export function Martini(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M8 22h8" /> <path d="M12 11v11" /> <path d="m19 3-7 8-7-8Z" /></svg>
  );
}
