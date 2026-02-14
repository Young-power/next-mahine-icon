import type { SVGProps } from "react";

export function Menu(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M4 5h16" /> <path d="M4 12h16" /> <path d="M4 19h16" /></svg>
  );
}
