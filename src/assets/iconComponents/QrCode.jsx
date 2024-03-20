import * as React from "react";
const SvgQrCode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 20h1m-4 0h-2v-3m3 0h3v-3h-1m-5 0h2M4 17c0-.932 0-1.398.152-1.766a2 2 0 0 1 1.082-1.082C5.602 14 6.068 14 7 14s1.398 0 1.766.152c.49.203.879.592 1.082 1.082.152.368.152.834.152 1.766s0 1.398-.152 1.765a2 2 0 0 1-1.082 1.083C8.398 20 7.932 20 7 20s-1.398 0-1.766-.152a2 2 0 0 1-1.082-1.082C4 18.398 4 17.932 4 17M14 7c0-.932 0-1.398.152-1.766a2 2 0 0 1 1.082-1.082C15.602 4 16.068 4 17 4s1.398 0 1.766.152c.49.203.879.592 1.082 1.082C20 5.602 20 6.068 20 7s0 1.398-.152 1.765a2 2 0 0 1-1.082 1.083C18.398 10 17.932 10 17 10s-1.398 0-1.766-.152a2 2 0 0 1-1.082-1.082C14 8.398 14 7.932 14 7M4 7c0-.932 0-1.398.152-1.766a2 2 0 0 1 1.082-1.082C5.602 4 6.068 4 7 4s1.398 0 1.766.152c.49.203.879.592 1.082 1.082C10 5.602 10 6.068 10 7s0 1.398-.152 1.765a2 2 0 0 1-1.082 1.083C8.398 10 7.932 10 7 10s-1.398 0-1.766-.152a2 2 0 0 1-1.082-1.082C4 8.398 4 7.932 4 7"
    />
  </svg>
);
export default SvgQrCode;
