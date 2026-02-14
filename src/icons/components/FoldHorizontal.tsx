import type { SVGProps } from "react";

export function FoldHorizontal(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M2 12h6" /> <path d="M22 12h-6" /> <path d="M12 2v2" /> <path d="M12 8v2" /> <path d="M12 14v2" /> <path d="M12 20v2" /> <path d="m19 9-3 3 3 3" /> <path d="m5 15 3-3-3-3" /></svg>
  );
}
