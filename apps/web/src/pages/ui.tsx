import BaseLayout from '@modules/layouts/components/base/base-layout';
import { Button, ButtonSizes, ColorSchemes, defaultColors } from 'ui';

const UIPage: React.FC = () => {
  const renderButtons = () => {
    return (
      <div className="flex flex-wrap gap-4 justify-center items-center p-4">
        <div className="flex flex-wrap gap-4 justify-center items-center p-4">
          {Object.keys(defaultColors).map((colorScheme) => {
            return (
              <div className="flex flex-col space-y-2">
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
        <div className="flex flex-wrap gap-4 justify-center items-center p-4">
          {Object.keys(defaultColors).map((colorScheme) => {
            return (
              <div className="flex flex-col space-y-2">
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
        <div className="flex flex-wrap gap-4 justify-center items-center p-4">
          {Object.keys(defaultColors).map((colorScheme) => {
            return (
              <div className="flex flex-col space-y-2">
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
        <div className="flex flex-wrap gap-4 justify-center items-center p-4">
          {Object.keys(defaultColors).map((colorScheme) => {
            return (
              <div className="flex flex-col space-y-2">
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
