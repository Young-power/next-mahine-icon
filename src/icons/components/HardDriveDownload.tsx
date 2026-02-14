import type { SVGProps } from "react";

export function HardDriveDownload(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 2v8" /> <path d="m16 6-4 4-4-4" /> <rect width="20" height="8" x="2" y="14" rx="2" /> <path d="M6 18h.01" /> <path d="M10 18h.01" /></svg>
  );
}
