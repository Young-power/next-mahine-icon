import type { SVGProps } from "react";

export function NotepadText(props: SVGProps<SVGSVGElement>) {
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
    > <path d="M8 2v4" /> <path d="M12 2v4" /> <path d="M16 2v4" /> <rect width="16" height="18" x="4" y="4" rx="2" /> <path d="M8 10h6" /> <path d="M8 14h8" /> <path d="M8 18h5" /></svg>
  );
}
