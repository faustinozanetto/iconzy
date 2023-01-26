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
      <h6 className="text-white font-semibold text-lg md:text-xl mb-2.5">{category}</h6>
      <ul className="font-normal space-y-2">
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
