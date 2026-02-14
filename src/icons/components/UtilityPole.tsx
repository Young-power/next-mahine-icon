import type { SVGProps } from "react";

export function UtilityPole(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 2v20" /> <path d="M2 5h20" /> <path d="M3 3v2" /> <path d="M7 3v2" /> <path d="M17 3v2" /> <path d="M21 3v2" /> <path d="m19 5-7 7-7-7" /></svg>
  );
}
