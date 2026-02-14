import type { SVGProps } from "react";

export function Clock6(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 6v10" /> <circle cx="12" cy="12" r="10" /></svg>
  );
}
