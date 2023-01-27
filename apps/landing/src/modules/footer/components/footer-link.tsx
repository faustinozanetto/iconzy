import Link from 'next/link';
import React from 'react';

export type FooterLinkProps = {
  href: string;
  title: string;
};

const FooterLink: React.FC<FooterLinkProps> = (props) => {
  const { href, title } = props;

  return (
    <Link href={href} className="font-medium text-neutral-50/90 transition-colors hover:text-neutral-800">
      {title}
    </Link>
  );
};

export default FooterLink;
