import { ICONS } from '@iconzy/icons-fetching';
import IconPackEditor from '@modules/icons/components/editor/icons-pack-editor';
import { getIconPackByName, getIconsFromIconPack, iconPackExists } from '@modules/icons/lib/icons-utils';
import { IconPackWithAll } from '@modules/icons/typings/icon.typings';
import { redirect } from 'next/navigation';

interface IconPackPageProps {
  params: {
    slug: string;
  };
}

const IconPackPage: React.FC<IconPackPageProps> = (props) => {
  const { params } = props;

  if (!iconPackExists(params.slug)) {
    return redirect('/');
  }

  const metadata = getIconPackByName(params.slug);
  const icons = getIconsFromIconPack(metadata);
  const iconPack: IconPackWithAll = { metadata, icons };

  return <IconPackEditor iconPack={iconPack} />;
};

export async function generateStaticParams() {
  const paths = ICONS.map((pack) => {
    return {
      slug: pack.name,
    };
  });

  return paths;
}

export default IconPackPage;
