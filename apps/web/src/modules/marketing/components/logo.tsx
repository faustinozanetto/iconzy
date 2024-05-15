import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/marketing/logo-light.svg"
        priority
        width={175}
        height={100}
        alt="Logo"
        className="block dark:hidden"
      />
      <Image
        src="/images/marketing/logo-dark.svg"
        priority
        width={175}
        height={100}
        alt="Logo"
        className="hidden dark:block"
      />
    </Link>
  );
};

export default Logo;
