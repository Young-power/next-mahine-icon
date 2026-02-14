import type { SVGProps } from "react";

export function GalleryVerticalEnd(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M7 2h10" /> <path d="M5 6h14" /> <rect width="18" height="12" x="3" y="10" rx="2" /></svg>
  );
}
