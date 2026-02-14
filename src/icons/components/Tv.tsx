import type { SVGProps } from "react";

export function Tv(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m17 2-5 5-5-5" /> <rect width="20" height="15" x="2" y="7" rx="2" /></svg>
  );
}
