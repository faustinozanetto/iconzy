import React from 'react';

interface FeatureCardData {
  title: string;
  text: string;
  icon: JSX.Element;
}

export interface FeatureCardProps {
  data: FeatureCardData;
}

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  const { data } = props;
  const { title, text, icon } = data;

  return (
    <div className="hover:border-primary group relative flex w-full cursor-pointer flex-col rounded-md border-2 p-4 transition-[border] md:w-[250px] h-full">
      <div className="bg-primary relative mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-2xl transition-transform group-hover:scale-105 md:h-[70px] md:w-[70px]">
        {icon}
      </div>
      <h4 className="mb-2 text-lg font-bold md:text-xl">{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default FeatureCard;
