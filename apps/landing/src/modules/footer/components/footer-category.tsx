import React from 'react';

import FooterLink, { FooterLinkProps } from './footer-link';

export type FooterCategoryProps = {
  category: string;
  links: FooterLinkProps[];
};

const FooterCategory: React.FC<FooterCategoryProps> = (props) => {
  const { category, links } = props;

  return (
    <div className="flex flex-col">
      <h6 className="mb-2.5 text-lg font-semibold text-white md:text-xl">{category}</h6>
      <ul className="space-y-2 font-normal">
        {links.map((link, index) => {
          return (
            <li key={`${category}-${index}`}>
              <FooterLink {...link} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterCategory;
