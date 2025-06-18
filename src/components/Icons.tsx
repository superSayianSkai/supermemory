import React from "react";

const ProductHuntIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 64 63"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    role="img"
    className={className}
  >
    <g clipPath="url(#product-hunt-clip)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 56C18.469 56 7.5 45.031 7.5 31.5C7.5 17.969 18.469 7 32 7C45.531 7 56.5 17.969 56.5 31.5C56.5 45.031 45.531 56 32 56ZM0.5 31.5C0.5 14.103 14.603 0 32 0C49.3971 0 63.5 14.103 63.5 31.5C63.5 48.8971 49.3971 63 32 63C14.603 63 0.5 48.8971 0.5 31.5ZM21.5 45.5V17.5H35.5C41.2992 17.5 46 22.201 46 28C46 33.7992 41.2992 38.5 35.5 38.5H28.5V45.5H21.5ZM39 28C39 29.933 37.433 31.5 35.5 31.5H28.5V24.5H35.5C37.433 24.5 39 26.067 39 28Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="product-hunt-clip">
        <rect width="63" height="63" fill="currentColor" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export default ProductHuntIcon;
