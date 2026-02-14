import type { SVGProps } from "react";

export function Tablets(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="7" cy="7" r="5" /> <circle cx="17" cy="17" r="5" /> <path d="M12 17h10" /> <path d="m3.46 10.54 7.08-7.08" /></svg>
  );
}
