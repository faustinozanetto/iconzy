import React from 'react';

const Logo: React.FC = (props) => {
  const {} = props;

  // return <Image src="/images/marketing/logo.svg" priority width={125} height={50} alt="Logo" style={{ fill: 'red' }} />;
  return <span className="text-4xl font-extrabold text-black dark:text-white">Iconzy</span>;
};

export default Logo;
