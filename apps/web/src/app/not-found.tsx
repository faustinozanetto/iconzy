import React from 'react';
import Link from 'next/link';
import { Button } from '@iconzy/ui';

export default function NotFoundPage() {
  return (
    <div className="mx-4 flex w-full flex-col items-center md:mx-0">
      <div className="my-6 w-full rounded-lg border p-4 px-4 shadow-lg sm:px-6 md:my-14 md:max-w-lg md:p-6 lg:my-20">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            The page does not exist!
          </h1>
          <p className="max-w-lg text-center">
            We apologize for the inconvenience, but it seems that an error has occurred. Our team has been notified and
            is working diligently to resolve the issue.
          </p>

          <Button asChild>
            <Link className="w-full" href="/">
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
