import { EDITOR_ENDPOINT } from '@lib/constants';
import Link from 'next/link';
import React from 'react';
import { Button } from 'ui';

type FeaturedIconPack = {
  name: string;
  slug: string;
};

export type FeaturedIconPackCardProps = {
  data: FeaturedIconPack;
};

const FeaturedIconPackCard: React.FC<FeaturedIconPackCardProps> = (props) => {
  const { data } = props;
  const { name, slug } = data;

  return (
    <div className="flex w-full cursor-pointer flex-col space-y-4 rounded-md bg-neutral-50 p-5 text-start shadow-lg md:w-[250px]">
      <div className="hover:border-primary-800 flex h-36 w-full items-center justify-center rounded-xl border-2 object-cover object-top transition duration-500 hover:scale-105">
        <h4 className="text-3xl font-bold text-neutral-900 md:text-4xl">{name}</h4>
      </div>

      <p className="leading-snug text-neutral-900 md:text-lg">
        Feather is a collection of simply beautiful open source icons.
      </p>
      <Link href={`${EDITOR_ENDPOINT}/${slug}`}>
        <Button className="w-full">Show More</Button>
      </Link>
    </div>
  );
};

export default FeaturedIconPackCard;
