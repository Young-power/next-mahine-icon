import type { SVGProps } from "react";

export function ReplyAll(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m12 17-5-5 5-5" /> <path d="M22 18v-2a4 4 0 0 0-4-4H7" /> <path d="m7 17-5-5 5-5" /></svg>
  );
}
