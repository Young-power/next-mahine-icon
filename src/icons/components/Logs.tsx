import type { SVGProps } from "react";

export function Logs(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M3 5h1" /> <path d="M3 12h1" /> <path d="M3 19h1" /> <path d="M8 5h1" /> <path d="M8 12h1" /> <path d="M8 19h1" /> <path d="M13 5h8" /> <path d="M13 12h8" /> <path d="M13 19h8" /></svg>
  );
}
