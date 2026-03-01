import type { SVGProps } from "react";

export function EmailColor({ width = 30, height = 30, ...props }: SVGProps<SVGSVGElement>) {
  return (
     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  xmlSpace="preserve" {...props} width={width} height={height} {...props}><g id="_x31_1_x2C__gmail_x2C__email_x2C__logo_x2C__mailing_x2C__google_x2C__shapes_and_symbols_x2C__brands_and_logotypes"> <g> <path style={{ fill: "#BC211D" }} d="M84.265,89.469v119.902L1,136.306c0-25.864,20.972-46.837,46.837-46.837H84.265z"/> <path style={{ fill: "#4180E9" }} d="M84.265,209.371v213.159H47.837C21.972,422.531,1,401.558,1,375.694V136.306L84.265,209.371z"/> <path style={{ fill: "#32A050" }} d="M511,136.306v239.388c0,25.864-20.972,46.837-46.837,46.837h-36.429V209.371L511,136.306z"/> <path style={{ fill: "#F0B304" }} d="M511,136.306l-83.265,73.065V89.469h36.429C490.028,89.469,511,110.442,511,136.306z"/> <polygon style={{ fill: "#E04133" }} points="427.735,89.469 427.735,209.371 256,360.082 84.265,209.371 84.265,89.469 256,256 "/> </g></g><g id="Layer_1"></g></svg>
  );
}
