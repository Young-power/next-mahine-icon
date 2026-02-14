import type { SVGProps } from "react";

export function LaptopMinimalCheck(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M2 20h20" /> <path d="m9 10 2 2 4-4" /> <rect x="3" y="4" width="18" height="12" rx="2" /></svg>
  );
}
