import * as React from "react";
const SvgReceipt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={2}
      d="M3 1.5h14v15.966a1 1 0 0 1-1.61.791l-1.332-1.026a1 1 0 0 0-1.151-.05l-1.825 1.174a2 2 0 0 1-2.164 0L7.093 17.18a1 1 0 0 0-1.151.05L4.61 18.257A1 1 0 0 1 3 17.466z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7.5h3M1 1.5h18M7 11.5h3M13 7.5h.5M13 11.5h.5"
    />
  </svg>
);
export default SvgReceipt;
