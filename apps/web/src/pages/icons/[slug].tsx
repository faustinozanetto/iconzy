import BaseLayout from '@modules/layouts/components/base/base-layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IconPackWithAll } from '@modules/icons/typings/icon.typings';
import { getIconPackByName, getIconsFromIconPack } from '@modules/icons/lib/icons-utils';
import { useIconsContext } from '@modules/icons/context/icons-context';
import { useEffect } from 'react';
import { IconsActionType } from '@modules/icons/context/types';
import IconPackEditor from '@modules/icons/components/editor/icons-pack-editor';

import { ICONS, IconPackRaw } from 'icons-fetching';

type IconPackPagePageProps = {
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

  return (
    <BaseLayout
      headProps={{
        title: `Browsing ${iconPack.metadata.name} | Iconozen`,
        description: 'Iconozen is a page for downloading and customizing svg icons for your projects.',
        url: `https://iconzy.vercel.app/icons/${iconPack.metadata.name}`,
        canonicalUrl: `https://iconzy.vercel.app/icons/${iconPack.metadata.name}`,
      }}
    >
      <IconPackEditor />
    </BaseLayout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = (ICONS as IconPackRaw[]).map((pack) => {
    return {
      params: {
        slug: pack.name,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
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
