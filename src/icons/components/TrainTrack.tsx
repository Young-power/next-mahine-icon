import type { SVGProps } from "react";

export function TrainTrack(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M2 17 17 2" /> <path d="m2 14 8 8" /> <path d="m5 11 8 8" /> <path d="m8 8 8 8" /> <path d="m11 5 8 8" /> <path d="m14 2 8 8" /> <path d="M7 22 22 7" /></svg>
  );
}
