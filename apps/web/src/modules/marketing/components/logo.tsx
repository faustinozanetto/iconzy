import { LANDING_ENDPOINT } from '@modules/common/lib/constants';
import { useThemeContext } from '@modules/theming/context/theme-context';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo: React.FC = (props) => {
  const {} = props;
  const { theme } = useThemeContext();

  return (
    <Link href={LANDING_ENDPOINT}>
      <Image
        src={theme === 'light' ? '/images/marketing/logo-light.svg' : '/images/marketing/logo-dark.svg'}
        priority
        width={175}
        height={100}
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
