import type { SVGProps } from "react";

export function Heading5(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M4 12h8" /> <path d="M4 18V6" /> <path d="M12 18V6" /> <path d="M17 13v-3h4" /> <path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" /></svg>
  );
}
