import type { SVGProps } from "react";

export function Power(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 2v10" /> <path d="M18.4 6.6a9 9 0 1 1-12.77.04" /></svg>
  );
}
