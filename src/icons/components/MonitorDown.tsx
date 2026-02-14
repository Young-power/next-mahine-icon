import type { SVGProps } from "react";

export function MonitorDown(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 13V7" /> <path d="m15 10-3 3-3-3" /> <rect width="20" height="14" x="2" y="3" rx="2" /> <path d="M12 17v4" /> <path d="M8 21h8" /></svg>
  );
}
