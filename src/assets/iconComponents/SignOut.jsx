import * as React from "react";
const SvgSignOut = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#Sign_Out_svg__a)"
    >
      <path d="M9 4H1v14a2 2 0 0 0 2 2h6M11 15l3-3m0 0-3-3m3 3H4" />
    </g>
    <defs>
      <clipPath id="Sign_Out_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSignOut;
