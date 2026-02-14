import type { SVGProps } from "react";

export function Heading4(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 18V6" /> <path d="M17 10v3a1 1 0 0 0 1 1h3" /> <path d="M21 10v8" /> <path d="M4 12h8" /> <path d="M4 18V6" /></svg>
  );
}
