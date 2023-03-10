import IconPackEditor from '@modules/icons/components/editor/icons-pack-editor';
import { useIconsContext } from '@modules/icons/context/icons/icons-context';
import { IconsActionType } from '@modules/icons/context/icons/reducer/types';
import { getIconPackByName, getIconsFromIconPack } from '@modules/icons/lib/icons-utils';
import type { IconPackWithAll } from '@modules/icons/typings/icon.typings';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import { ICONS } from 'icons-fetching';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect } from 'react';

type IconPackPagePageProps = {
  /**
   * The icon pack of the specified page.
   */
  iconPack: IconPackWithAll;
};

const IconPackPage: React.FC<IconPackPagePageProps> = (props) => {
  const { iconPack } = props;
  const { dispatch } = useIconsContext();

  useEffect(() => {
    dispatch({
      type: IconsActionType.SET_ICON_PACK,
      payload: {
        iconPack: iconPack.metadata,
      },
    });
    dispatch({
      type: IconsActionType.SET_ICONS,
      payload: {
        icons: iconPack.icons,
      },
    });
  }, []);

  const parsedName = iconPack.metadata.name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <BaseLayout
      headProps={{
        title: `Browsing ${parsedName} | Iconzy Editor`,
        description:
          'Iconzy is a personal project for customizing and browsing free icon packs for your personal projects.',
        url: `https://iconzy.vercel.app/icons/${iconPack.metadata.name}`,
        canonicalUrl: `https://iconzy.vercel.app/icons/${iconPack.metadata.name}`,
      }}
    >
      <IconPackEditor />
    </BaseLayout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = ICONS.map((pack) => {
    return {
      params: {
        slug: pack.name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const slug: string = context?.params?.slug as string;
  try {
    const metadata = getIconPackByName(slug);
    const icons = getIconsFromIconPack(metadata);
    const iconPack: IconPackWithAll = { metadata, icons };
    return {
      props: {
        iconPack,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default IconPackPage;
