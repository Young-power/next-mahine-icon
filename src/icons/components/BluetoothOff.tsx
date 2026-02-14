import type { SVGProps } from "react";

export function BluetoothOff(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m17 17-5 5V12l-5 5" /> <path d="m2 2 20 20" /> <path d="M14.5 9.5 17 7l-5-5v4.5" /></svg>
  );
}
