import BaseLayout from '@modules/layouts/components/base/base-layout';

const HomePage: React.FC = () => {
  return (
    <BaseLayout
      headProps={{
        title: 'Home | Iconozen',
        description: 'Iconozen is a page for downloading and customizing svg icons for your projects.',
        url: 'https://iconozen.app',
        canonicalUrl: 'https://iconozen.app',
      }}
    >
      <div className="flex flex-col items-center justify-center"></div>
    </BaseLayout>
  );
};

export default HomePage;
