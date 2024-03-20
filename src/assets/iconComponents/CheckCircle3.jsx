import * as React from "react";
const SvgCheckCircle3 = (props) => (
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
      clipPath="url(#Check_Circle_3_svg__a)"
    >
      <circle cx={12} cy={12} r={9} />
      <path d="m15 10-4 4-2-2" />
    </g>
    <defs>
      <clipPath id="Check_Circle_3_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCheckCircle3;
