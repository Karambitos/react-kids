import * as React from 'react';
const SVGeye = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="15px"
    height="15px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="none"
      stroke="#000000"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M1,32c0,0,11,15,31,15s31-15,31-15S52,17,32,17 S1,32,1,32z"
    />
    <circle
      fill="none"
      stroke="#000000"
      strokeWidth={2}
      strokeMiterlimit={10}
      cx={32}
      cy={32}
      r={7}
    />
  </svg>
);
export default SVGeye;
