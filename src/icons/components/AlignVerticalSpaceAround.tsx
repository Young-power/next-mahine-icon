import type { SVGProps } from "react";

export function AlignVerticalSpaceAround(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="10" height="6" x="7" y="9" rx="2" /> <path d="M22 20H2" /> <path d="M22 4H2" /></svg>
  );
}
