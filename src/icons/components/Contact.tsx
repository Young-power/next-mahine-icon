import type { SVGProps } from "react";

export function Contact(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M16 2v2" /> <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" /> <path d="M8 2v2" /> <circle cx="12" cy="11" r="3" /> <rect x="3" y="4" width="18" height="18" rx="2" /></svg>
  );
}
