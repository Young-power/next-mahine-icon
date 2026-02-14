import type { SVGProps } from "react";

export function MonitorPause(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M10 13V7" /> <path d="M14 13V7" /> <rect width="20" height="14" x="2" y="3" rx="2" /> <path d="M12 17v4" /> <path d="M8 21h8" /></svg>
  );
}
