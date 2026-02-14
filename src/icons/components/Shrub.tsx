import type { SVGProps } from "react";

export function Shrub(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5" /> <path d="M14.5 14.5 12 17" /> <path d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z" /></svg>
  );
}
