import BaseLayout from '@modules/layouts/components/base/base-layout';

const HomePage: React.FC = () => {
  return (
    <BaseLayout
      headProps={{
        title: 'Home | Iconzy',
        description:
          'Iconzy is a personal project for customizing and browsing free icon packs for your personal projects.',
        url: 'https://iconzy.vercel.app',
        canonicalUrl: 'https://iconzy.vercel.app',
      }}
    >
      <div className="flex flex-col items-center justify-center"></div>
    </BaseLayout>
  );
};

export default HomePage;
