import type { SVGProps } from "react";

export function WavesLadder(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M19 5a2 2 0 0 0-2 2v11" /> <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /> <path d="M7 13h10" /> <path d="M7 9h10" /> <path d="M9 5a2 2 0 0 0-2 2v11" /></svg>
  );
}
