import type { SVGProps } from "react";

export function FlipHorizontal2(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m3 7 5 5-5 5V7" /> <path d="m21 7-5 5 5 5V7" /> <path d="M12 20v2" /> <path d="M12 14v2" /> <path d="M12 8v2" /> <path d="M12 2v2" /></svg>
  );
}
