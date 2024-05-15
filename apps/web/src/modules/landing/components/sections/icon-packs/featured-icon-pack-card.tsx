import { Button } from '@iconzy/ui';
import Link from 'next/link';
import React from 'react';

interface FeaturedIconPack {
  name: string;
  slug: string;
}

export interface FeaturedIconPackCardProps {
  data: FeaturedIconPack;
}

const FeaturedIconPackCard: React.FC<FeaturedIconPackCardProps> = (props) => {
  const { data } = props;
  const { name, slug } = data;

  return (
    <div className="flex w-full cursor-pointer flex-col space-y-2 rounded-md bg-background p-5 text-start shadow-lg">
      <div className="hover:border-primary flex h-36 w-full items-center justify-center rounded-xl border-2 object-cover object-top transition duration-500 hover:scale-105">
        <h4 className="text-3xl font-bold md:text-4xl text-center">{name}</h4>
      </div>
      <p className="leading-snug md:text-lg">Feather is a collection of simply beautiful open source icons.</p>
      <Button asChild className="w-full">
        <Link href={`icons/${slug}`}>Show More</Link>
      </Button>
    </div>
  );
};

export default FeaturedIconPackCard;
