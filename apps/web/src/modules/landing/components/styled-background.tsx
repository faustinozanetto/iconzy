'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { useBrowserCheck } from '../hooks/use-browser-check';

interface StyledBackgroundProps {
  className?: string;
}

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
        <linearGradient
          gradientTransform="rotate(191, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ffflux-gradient"
        >
          <stop stopColor="hsl( 346.8, 77.2%, 49.8%)" stopOpacity="1" offset="0%"></stop>
          <stop stopColor="hsl( 240 4.8% 95.9%)" stopOpacity="1" offset="100%"></stop>
        </linearGradient>
        <filter
          id="ffflux-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolation="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.005 0.006"
            numOctaves="2"
            seed="2"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feGaussianBlur
            stdDeviation="52 20"
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
