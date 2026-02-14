import type { SVGProps } from "react";

export function CirclePile(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="12" cy="19" r="2" /> <circle cx="12" cy="5" r="2" /> <circle cx="16" cy="12" r="2" /> <circle cx="20" cy="19" r="2" /> <circle cx="4" cy="19" r="2" /> <circle cx="8" cy="12" r="2" /></svg>
  );
}
