import type { SVGProps } from "react";

export function Heading1(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M4 12h8" /> <path d="M4 18V6" /> <path d="M12 18V6" /> <path d="m17 12 3-2v8" /></svg>
  );
}
