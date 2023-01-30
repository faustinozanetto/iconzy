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
    <div className="hover:border-primary-700 group relative flex w-full cursor-pointer flex-col rounded-md border-2 p-4 transition-[border] md:w-[250px]">
      <div className="bg-primary-800 relative mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-2xl transition-transform group-hover:scale-105 md:h-[70px] md:w-[70px]">
        {icon}
      </div>
      <h4 className="mb-2 text-lg font-bold text-neutral-900 md:text-xl">{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default FeatureCard;
