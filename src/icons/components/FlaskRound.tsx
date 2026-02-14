import type { SVGProps } from "react";

export function FlaskRound(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M10 2v6.292a7 7 0 1 0 4 0V2" /> <path d="M5 15h14" /> <path d="M8.5 2h7" /></svg>
  );
}
