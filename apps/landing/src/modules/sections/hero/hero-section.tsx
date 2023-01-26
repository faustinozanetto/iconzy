import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 md:py-16">
      <div className="mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">
          Browse
          <span className="text-lime-400"> 10000+</span> <br />
          icons for free now
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
