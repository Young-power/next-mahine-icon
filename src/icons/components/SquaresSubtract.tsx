import type { SVGProps } from "react";

export function SquaresSubtract(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M10 22a2 2 0 0 1-2-2" /> <path d="M16 22h-2" /> <path d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z" /> <path d="M20 8a2 2 0 0 1 2 2" /> <path d="M22 14v2" /> <path d="M22 20a2 2 0 0 1-2 2" /></svg>
  );
}
