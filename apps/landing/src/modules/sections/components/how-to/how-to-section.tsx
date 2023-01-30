import React from 'react';

const HowToSection: React.FC = () => {
  return (
    <section className="bg-neutral-50 px-4 pb-20 pt-8 md:px-8 lg:pb-[120px] lg:pt-[70px]">
      <div className="container mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Top Content */}
        <div className="lg:mb-18 mb-10 w-full max-w-2xl">
          <h2 className="mb-4 text-4xl font-extrabold text-neutral-900 md:text-5xl">Get Started</h2>
          <p className="text-lg text-neutral-900 md:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur fuga debitis sint architecto aliquam
            voluptatum rerum neque tempora provident quam.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="bg-primary-800 flex flex-col rounded-md p-4">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-50">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" stroke="none">
                <path d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V64z" />
              </svg>
            </div>
            <p className="text-lg text-neutral-50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, cupiditate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
