import type { SVGProps } from "react";

export function MoveDown(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M8 18L12 22L16 18" /> <path d="M12 2V22" /></svg>
  );
}
