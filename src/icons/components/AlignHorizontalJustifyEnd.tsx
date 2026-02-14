import type { SVGProps } from "react";

export function AlignHorizontalJustifyEnd(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="6" height="14" x="2" y="5" rx="2" /> <rect width="6" height="10" x="12" y="7" rx="2" /> <path d="M22 2v20" /></svg>
  );
}
