import type { SVGProps } from "react";

export function SmartphoneCharging(props: SVGProps<SVGSVGElement>) {
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
    > <rect width="14" height="20" x="5" y="2" rx="2" ry="2" /> <path d="M12.667 8 10 12h4l-2.667 4" /></svg>
  );
}
