import BaseLayout from '@modules/layouts/components/base/base-layout';
import { ColorSchemes } from 'ui';
import { Button, defaultColors } from 'ui';

const UIPage: React.FC = () => {
  const renderButtons = () => {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        <div className="flex flex-wrap items-center justify-center gap-4 p-4">
          {Object.keys(defaultColors).map((colorScheme) => {
            return (
              <div className="flex flex-col space-y-2" key={colorScheme}>
                <Button size="xs" variant="solid" colorScheme={colorScheme as ColorSchemes}>
                  {colorScheme}
                </Button>
                <Button size="xs" variant="outline" colorScheme={colorScheme as ColorSchemes}>
                  {colorScheme}
                </Button>
                <Button size="xs" variant="ghost" colorScheme={colorScheme as ColorSchemes}>
                  {colorScheme}
                </Button>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 p-4">
          {Object.keys(defaultColors).map((colorScheme) => {
            return (
              <div className="flex flex-col space-y-2" key={colorScheme}>
                <Button size="sm" variant="solid" colorScheme={colorScheme as ColorSchemes}>
                  {colorScheme}
                </Button>
                <Button size="sm" variant="outline" colorScheme={colorScheme as ColorSchemes}>
                  {colorScheme}
                </Button>
                <Button size="sm" variant="ghost" colorScheme={colorScheme as ColorSchemes}>
                  {colorScheme}
                </Button>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 p-4">
          {Object.keys(defaultColors).map((colorScheme) => {
            return (
              <div className="flex flex-col space-y-2" key={colorScheme}>
                <Button size="md" variant="solid" colorScheme={colorScheme as ColorSchemes}>
                  {colorScheme}
                </Button>
                <Button size="md" variant="outline" colorScheme={colorScheme as ColorSchemes}>
                  {colorScheme}
                </Button>
                <Button size="md" variant="ghost" colorScheme={colorScheme as ColorSchemes}>
                  {colorScheme}
                </Button>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 p-4">
          {Object.keys(defaultColors).map((colorScheme) => {
            return (
              <div className="flex flex-col space-y-2" key={colorScheme}>
                <Button size="lg" variant="solid" colorScheme={colorScheme as ColorSchemes}>
                  {colorScheme}
                </Button>
                <Button size="lg" variant="outline" colorScheme={colorScheme as ColorSchemes}>
                  {colorScheme}
                </Button>
                <Button size="lg" variant="ghost" colorScheme={colorScheme as ColorSchemes}>
                  {colorScheme}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <BaseLayout
      headProps={{
        title: 'UI Debug | Iconozen',
        description: 'Iconozen is a page for downloading and customizing svg icons for your projects.',
        url: 'https://iconozen.app',
        canonicalUrl: 'https://iconozen.app',
      }}
    >
      <div className="flex flex-col items-center justify-center">{renderButtons()}</div>
    </BaseLayout>
  );
};

export default UIPage;
