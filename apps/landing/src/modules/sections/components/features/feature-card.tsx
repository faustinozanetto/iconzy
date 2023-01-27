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
    <div className="hover:border-primary-700 group relative flex w-full cursor-pointer flex-col rounded-md border-2 p-4 transition-[border] sm:w-[250px]">
      <div className="bg-primary-800 relative mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-2xl transition-transform group-hover:scale-105">
        {icon}
      </div>
      <h4 className="mb-2 text-xl font-bold text-neutral-900">{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default FeatureCard;
