import type { SVGProps } from "react";

export function GitCommitVertical(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M12 3v6" /> <circle cx="12" cy="12" r="3" /> <path d="M12 15v6" /></svg>
  );
}
