import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { useBrowserCheck } from '../hooks/use-browser-check';

type StyledBackgroundProps = {
  className?: string;
};

const StyledBackground: React.FC<StyledBackgroundProps> = (props) => {
  const { className } = props;
  const isSafariBrowser = useBrowserCheck('Safari');

  const safariBrowserFallback = (
    <Image
      className={clsx('h-full w-full object-cover', className)}
      src="/images/hero-background-fallback.png"
      alt="Hero Background"
      priority
      width={1500}
      height={1500}
    />
  );

  if (isSafariBrowser) return safariBrowserFallback;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 700 700"
    >
      <defs>
        <radialGradient id="ffflux-gradient">
          <stop offset="0%" stopColor="#784af6"></stop>
          <stop offset="100%" stopColor="#8766e5"></stop>
        </radialGradient>
        <filter
          id="ffflux-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
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
  );
};

export default StyledBackground;
