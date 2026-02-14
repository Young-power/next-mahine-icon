import type { SVGProps } from "react";

export function Music2(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="8" cy="18" r="4" /> <path d="M12 18V2l7 4" /></svg>
  );
}
