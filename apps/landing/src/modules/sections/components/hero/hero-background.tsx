import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 -z-10">
      <svg
        className="min-h-screen"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 700 700"
      >
        <defs>
          <radialGradient id="ffflux-gradient">
            <stop offset="0%" stop-color="#784af6"></stop>
            <stop offset="100%" stop-color="#8766e5"></stop>
          </radialGradient>
          <filter
            id="ffflux-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.003 0.003"
              numOctaves="2"
              seed="286"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feGaussianBlur
              stdDeviation="9 0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              edgeMode="duplicate"
              result="blur"
            ></feGaussianBlur>
            <feBlend
              mode="color-dodge"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              in2="blur"
              result="blend"
            ></feBlend>
          </filter>
        </defs>
        <rect width="700" height="700" fill="url(#ffflux-gradient)" filter="url(#ffflux-filter)"></rect>
      </svg>
    </div>
  );
};

export default HeroBackground;
