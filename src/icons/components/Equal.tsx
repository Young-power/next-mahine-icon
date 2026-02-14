import type { SVGProps } from "react";

export function Equal(props: SVGProps<SVGSVGElement>) {
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
    > <line x1="5" x2="19" y1="9" y2="9" /> <line x1="5" x2="19" y1="15" y2="15" /></svg>
  );
}
