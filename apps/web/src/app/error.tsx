'use client';

import { Button } from '@iconzy/ui';
import Link from 'next/link';

export default function GlobalError({ error }: { error: Error & { digest?: string } }): React.JSX.Element {
  return (
    <div className="mx-4 flex w-full flex-col items-center md:mx-0">
      <div className="my-6 w-full rounded-lg border p-4 px-4 shadow-lg sm:px-6 md:my-14 md:max-w-lg md:p-6 lg:my-20">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            An error occurred!
          </h1>
          <p className="max-w-lg text-center">
            We apologize for the inconvenience, but it seems that an error has occurred. Our team has been notified and
            is working diligently to resolve the issue.
          </p>
          <p className="text-destructive max-w-lg text-center font-bold md:text-lg">{error.message}</p>
          <div className="flex w-full flex-col gap-2">
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
