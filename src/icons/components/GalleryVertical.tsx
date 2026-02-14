import type { SVGProps } from "react";

export function GalleryVertical(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M3 2h18" /> <rect width="18" height="12" x="3" y="6" rx="2" /> <path d="M3 22h18" /></svg>
  );
}
