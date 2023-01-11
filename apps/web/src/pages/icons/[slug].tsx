import IconPackEditor from '@modules/icons/components/icon-pack-editor';
import BaseLayout from '@modules/layouts/components/base/base-layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import iconPacks from '@modules/icons/lib/icon-packs.json';
import { IconPack } from '@modules/icons/typings/editor.typings';

type EditorPageProps = {
  iconPack: IconPack;
};

const EditorPage: React.FC<EditorPageProps> = (props) => {
  const { iconPack } = props;
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
  const iconPack = (iconPacks as IconPack[]).find((pack) => pack.slug === slug);
  return {
    props: {
      iconPack,
    },
  };
};

export default EditorPage;