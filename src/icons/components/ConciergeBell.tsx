import type { SVGProps } from "react";

export function ConciergeBell(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" /> <path d="M20 16a8 8 0 1 0-16 0" /> <path d="M12 4v4" /> <path d="M10 4h4" /></svg>
  );
}
