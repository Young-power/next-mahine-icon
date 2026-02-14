import type { SVGProps } from "react";

export function FishSymbol(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M2 16s9-15 20-4C11 23 2 8 2 8" /></svg>
  );
}
