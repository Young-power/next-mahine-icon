import type { SVGProps } from "react";

export function DiscAlbum(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="18" height="18" x="3" y="3" rx="2" /> <circle cx="12" cy="12" r="5" /> <path d="M12 12h.01" /></svg>
  );
}
