import * as React from "react";
const SvgDelete = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g stroke="#000" strokeWidth={2} clipPath="url(#Delete_svg__a)">
      <path strokeLinecap="round" d="M14.5 11.715h-5M13 15.715h-2" />
      <path d="M5.886 15.524 4.88 6.43H19.12l-1.005 9.094c-.148 1.348-.253 2.284-.407 3.001-.15.699-.327 1.087-.562 1.374a3 3 0 0 1-.69.618c-.31.201-.716.335-1.427.408-.73.074-1.672.075-3.028.075s-2.298-.001-3.028-.075c-.71-.073-1.117-.207-1.427-.408a3 3 0 0 1-.69-.618c-.235-.287-.412-.675-.562-1.374-.154-.717-.258-1.653-.407-3.001Z" />
      <path
        strokeLinecap="round"
        d="M3 6.122h18M8 6v0a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v0"
      />
    </g>
    <defs>
      <clipPath id="Delete_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDelete;
