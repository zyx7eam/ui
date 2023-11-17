'use client';

import React from 'react';

const Blob = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      viewBox='0 0 800 800'
      opacity='0.34'
    >
      <defs>
        <filter
          id='bbblurry-filter'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='105'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          ></feGaussianBlur>
        </filter>
      </defs>
      <g filter='url(#bbblurry-filter)'>
        <ellipse
          rx='150'
          ry='150'
          cx='380.18666707782836'
          cy='339.9519014208729'
          fill='hsl(316, 73%, 52%)'
        ></ellipse>
      </g>
    </svg>
  );
};

export default Blob;
