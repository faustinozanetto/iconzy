import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image src="/images/marketing/logo.svg" priority width={175} height={100} alt="Logo" />
    </Link>
  );
};

export default Logo;
