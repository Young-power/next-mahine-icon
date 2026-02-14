import type { SVGProps } from "react";

export function Terminal(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 19h8" /> <path d="m4 17 6-6-6-6" /></svg>
  );
}
