import type { SVGProps } from "react";

export function MoveUp(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M8 6L12 2L16 6" /> <path d="M12 2V22" /></svg>
  );
}
