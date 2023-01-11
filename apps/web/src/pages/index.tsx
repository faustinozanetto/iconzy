import BaseLayout from '@modules/layouts/components/base/base-layout';
import { Button } from 'ui';

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
      <div className="flex flex-col items-center justify-center">
        <h1>Web hello</h1>
        <Button variant="solid">Hello World</Button>
        <Button variant="outline" colorScheme="primary">
          Hello World
        </Button>
        <Button variant="solid" colorScheme="red">
          Hello World
        </Button>
      </div>
    </BaseLayout>
  );
};

export default HomePage;
