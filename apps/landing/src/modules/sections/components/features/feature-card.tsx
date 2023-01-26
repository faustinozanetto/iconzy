import React from 'react';

export type FeatureCardProps = {
  title: string;
  icon: JSX.Element;
  text: string;
};

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  const { title, icon, text } = props;

  return (
    <div className="w-full flex flex-col">
      <div className="relative mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary-800">
        {icon}
      </div>
      <h4 className="mb-2 text-xl font-bold text-neutral-800">{title}</h4>
      <p className="text-body-color">{text}</p>
    </div>
  );
};

export default FeatureCard;
