import type { SVGProps } from "react";

export function MoveVertical(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 2v20" /> <path d="m8 18 4 4 4-4" /> <path d="m8 6 4-4 4 4" /></svg>
  );
}
