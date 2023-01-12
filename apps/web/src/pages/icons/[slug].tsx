import IconPackEditor from '@modules/icons/components/icon-pack-editor';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import iconPacks from '@modules/icons/lib/icon-packs.json';
import { Icon, IconPack, IconPackWithAll } from '@modules/icons/typings/icon.typings';
import { getIconPackBySlug, getIconsFromIconPack } from '@modules/icons/lib/icons-utils';
import { useIconsContext } from '@modules/icons/context/icons-context';
import { useEffect } from 'react';
import { IconsActionType } from '@modules/icons/context/types';

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
        title: 'Editor | Iconozen',
        description: 'Iconozen is a page for downloading and customizing svg icons for your projects.',
        url: 'https://iconozen.app',
        canonicalUrl: 'https://iconozen.app',
      }}
    >
      <IconPackEditor />
    </BaseLayout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = (iconPacks as IconPack[]).map((pack) => {
    return {
      params: {
        slug: pack.slug,
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
    const metadata = getIconPackBySlug(slug);
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
