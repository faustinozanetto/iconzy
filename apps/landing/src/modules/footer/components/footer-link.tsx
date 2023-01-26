import Link from 'next/link';
import React from 'react';

export type FooterLinkProps = {
  href: string;
  title: string;
};

const FooterLink: React.FC<FooterLinkProps> = (props) => {
  const { href, title } = props;

  return (
    <Link href={href} className="text-neutral-50/90 font-medium hover:text-neutral-800 transition-colors">
      {title}
    </Link>
  );
};

export default FooterLink;
