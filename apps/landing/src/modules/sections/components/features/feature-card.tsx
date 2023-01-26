import React from 'react';

type FeatureCardData = {
  title: string;
  text: string;
  icon: JSX.Element;
};

export type FeatureCardProps = {
  data: FeatureCardData;
};

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  const { data } = props;
  const { title, text, icon } = data;

  return (
    <div className="w-full sm:w-[250px] flex flex-col relative p-4 rounded-md border-2 hover:border-primary-700 transition-[border] group cursor-pointer">
      <div className="relative mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary-800 group-hover:scale-105 transition-transform">
        {icon}
      </div>
      <h4 className="mb-2 text-xl font-bold text-neutral-800">{title}</h4>
      <p className="text-body-color">{text}</p>
    </div>
  );
};

export default FeatureCard;
