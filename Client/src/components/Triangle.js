import React from 'react';
const Triangle = () => {
  return (
    <div className="d-flex fd-column p8 pr24">
      <svg
        aria-hidden="true"
        className="svg-icon iconArrowUpLg native js-svg fill-current fc-black-300"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        <path d="M2 25h32L18 9 2 25Z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className="svg-icon iconArrowDownLg native js-svg fill-current fc-black-300"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        <path d="M2 11h32L18 27 2 11Z"></path>
      </svg>
    </div>
  );
};
export default Triangle;
