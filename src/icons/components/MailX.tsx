import type { SVGProps } from "react";

export function MailX(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" /> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /> <path d="m17 17 4 4" /> <path d="m21 17-4 4" /></svg>
  );
}
