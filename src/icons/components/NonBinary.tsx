import type { SVGProps } from "react";

export function NonBinary(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 2v10" /> <path d="m8.5 4 7 4" /> <path d="m8.5 8 7-4" /> <circle cx="12" cy="17" r="5" /></svg>
  );
}
