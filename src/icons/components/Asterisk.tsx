import type { SVGProps } from "react";

export function Asterisk(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 6v12" /> <path d="M17.196 9 6.804 15" /> <path d="m6.804 9 10.392 6" /></svg>
  );
}
