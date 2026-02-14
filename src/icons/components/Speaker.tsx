import type { SVGProps } from "react";

export function Speaker(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="16" height="20" x="4" y="2" rx="2" /> <path d="M12 6h.01" /> <circle cx="12" cy="14" r="4" /> <path d="M12 14h.01" /></svg>
  );
}
