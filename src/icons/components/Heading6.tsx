import type { SVGProps } from "react";

export function Heading6(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M4 12h8" /> <path d="M4 18V6" /> <path d="M12 18V6" /> <circle cx="19" cy="16" r="2" /> <path d="M20 10c-2 2-3 3.5-3 6" /></svg>
  );
}
