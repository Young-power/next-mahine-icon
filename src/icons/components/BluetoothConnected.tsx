import type { SVGProps } from "react";

export function BluetoothConnected(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m7 7 10 10-5 5V2l5 5L7 17" /> <line x1="18" x2="21" y1="12" y2="12" /> <line x1="3" x2="6" y1="12" y2="12" /></svg>
  );
}
