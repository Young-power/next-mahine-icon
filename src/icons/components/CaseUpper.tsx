import type { SVGProps } from "react";

export function CaseUpper(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5" /> <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" /> <path d="M3.304 13h6.392" /></svg>
  );
}
