import BaseLayout from '@modules/layouts/components/base/base-layout';
const EditorPage: React.FC = () => {
  return (
    <BaseLayout
      headProps={{
        title: 'Editor | Iconozen',
        description: 'Iconozen is a page for downloading and customizing svg icons for your projects.',
        url: 'https://iconozen.app',
        canonicalUrl: 'https://iconozen.app',
      }}
    >
      Editor
    </BaseLayout>
  );
};

export default EditorPage;
