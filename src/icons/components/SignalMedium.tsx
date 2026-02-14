import type { SVGProps } from "react";

export function SignalMedium(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M2 20h.01" /> <path d="M7 20v-4" /> <path d="M12 20v-8" /></svg>
  );
}
