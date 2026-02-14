import type { SVGProps } from "react";

export function CaseSensitive(props: SVGProps<SVGSVGElement>) {
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
    > <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" /> <path d="M22 9v7" /> <path d="M3.304 13h6.392" /> <circle cx="18.5" cy="12.5" r="3.5" /></svg>
  );
}
