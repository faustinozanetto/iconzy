import { EDITOR_ENDPOINT } from '@lib/constants';
import Image from 'next/image';
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
    <div className="hover:border-primary-700 group relative flex w-full cursor-pointer flex-col rounded-md border-2 sm:w-[250px]">
      <div className="relative mb-4 p-4 shadow-md">
        <Image
          src="/images/holographic.webp"
          alt="Holo"
          width={500}
          height={500}
          className="absolute inset-0 h-full rounded-t-md"
        />
        <h4 className="relative z-10 text-xl font-bold text-neutral-900 before:absolute before:-z-10 before:h-full before:w-full before:bg-white/80 before:backdrop-blur-md">
          {name}
        </h4>
      </div>

      <div className="relative flex flex-col space-y-4 px-4 pb-4">
        <p>Feather is a collection of simply beautiful open source icons.</p>

        <Link href={`${EDITOR_ENDPOINT}/${slug}`} target="_blank">
          <Button className="w-full">Show More</Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedIconPackCard;
