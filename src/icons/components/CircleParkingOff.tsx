import type { SVGProps } from "react";

export function CircleParkingOff(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12.656 7H13a3 3 0 0 1 2.984 3.307" /> <path d="M13 13H9" /> <path d="M19.071 19.071A1 1 0 0 1 4.93 4.93" /> <path d="m2 2 20 20" /> <path d="M8.357 2.687a10 10 0 0 1 12.956 12.956" /> <path d="M9 17V9" /></svg>
  );
}
