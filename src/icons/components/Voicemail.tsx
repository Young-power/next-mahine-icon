import type { SVGProps } from "react";

export function Voicemail(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="6" cy="12" r="4" /> <circle cx="18" cy="12" r="4" /> <line x1="6" x2="18" y1="16" y2="16" /></svg>
  );
}
