import fs from 'fs';
import path from 'path';
import { Element } from 'html-react-parser';
import parse from 'html-react-parser';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import { GetStaticProps } from 'next';
import iconPacksData from '@modules/icons/lib/icon-packs.json';
import { IconPack } from '@modules/icons/typings/editor.typings';
import { useIconsContext } from '@modules/icons/context/theme-context';
import React from 'react';

type IconsPageProps = {
  iconPacks: IconPack[];
  featuredIconsInPack: { iconPack: string; icons: string[] }[];
};

const IconsPage: React.FC<IconsPageProps> = (props) => {
  const { iconPacks, featuredIconsInPack } = props;
  const { dispatch } = useIconsContext();

  return (
    <BaseLayout
      headProps={{
        title: 'Editor | Iconozen',
        description: 'Iconozen is a page for downloading and customizing svg icons for your projects.',
        url: 'https://iconozen.app',
        canonicalUrl: 'https://iconozen.app',
      }}
    >
      <div className="flex gap-4 p-4">
        {iconPacks.map((iconPack) => {
          return (
            <div
              key={iconPack.slug}
              className="group cursor-pointer overflow-hidden rounded-lg justify-center flex items-center flex-col p-4 space-y-2 bg-neutral-50 shadow-lg dark:bg-neutral-800 w-fit"
            >
              <h2 className="text-xl font-semibold leading-snug tracking-tight text-black dark:text-white">
                {iconPack.name}
              </h2>
              <div className="grid grid-cols-5 grid-rows-2 gap-4 p-2 bg-neutral-200 dark:bg-neutral-900 rounded-md place-items-center w-fit">
                {featuredIconsInPack
                  .find((pack) => {
                    return pack.iconPack === iconPack.slug;
                  })
                  .icons.map((icon, index) => {
                    const SVGIcon = parse(icon, {
                      replace: (domNode) => {
                        const domElement: Element = domNode as Element;

                        domElement.attribs = { ...domElement.attribs, className: 'stroke-black dark:stroke-white' };

                        return domElement;
                      },
                    });
                    return SVGIcon;
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const iconPacks = iconPacksData as IconPack[];

  const featuredIconsInPack: { iconPack: string; icons: string[] }[] = iconPacks.map((iconPack) => {
    const iconPackFolder = path.join(process.cwd(), 'public/icons/' + iconPack.slug);
    const files: string[] = fs.readdirSync(iconPackFolder, 'utf8').slice(0, 10);
    const featuredIcons = files.map((file) => fs.readFileSync(path.join(iconPackFolder, file), 'utf8'));

    return { iconPack: iconPack.slug, icons: featuredIcons };
  });

  return {
    props: {
      iconPacks,
      featuredIconsInPack,
    },
  };
};

export default IconsPage;
