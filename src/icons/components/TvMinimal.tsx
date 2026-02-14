import type { SVGProps } from "react";

export function TvMinimal(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M7 21h10" /> <rect width="20" height="14" x="2" y="3" rx="2" /></svg>
  );
}
