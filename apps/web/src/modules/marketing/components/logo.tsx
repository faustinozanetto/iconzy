import React from 'react';
import Image from 'next/image';

type LogoProps = {};

const Logo: React.FC<LogoProps> = (props) => {
  const {} = props;

  // return <Image src="/images/marketing/logo.svg" priority width={125} height={50} alt="Logo" style={{ fill: 'red' }} />;
  return <span className="text-4xl font-extrabold">Iconzy</span>;
};

export default Logo;
