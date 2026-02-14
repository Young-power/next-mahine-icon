import type { SVGProps } from "react";

export function GitPullRequestDraft(props: SVGProps<SVGSVGElement>) {
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
    > <circle cx="18" cy="18" r="3" /> <circle cx="6" cy="6" r="3" /> <path d="M18 6V5" /> <path d="M18 11v-1" /> <line x1="6" x2="6" y1="9" y2="21" /></svg>
  );
}
