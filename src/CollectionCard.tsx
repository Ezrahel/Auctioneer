"use client";

import React from "react";

interface CollectionCardProps {
  primaryImage: string;
  secondaryImages: [string, string];
  count: number;
  title: string;
  creatorName: string;
  creatorAvatar: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  primaryImage,
  secondaryImages,
  count,
  title,
  creatorName,
  creatorAvatar,
}) => {
  return (
    <article className="flex flex-col gap-4 items-start rounded-3xl bg-zinc-800 w-[330px] max-md:w-full max-sm:w-full">
      <div className="flex flex-col gap-4 items-start w-full">
        <img
          src={primaryImage}
          alt={`${title} primary image`}
          className="w-full rounded-3xl h-[330px] object-cover"
        />
        <div className="flex gap-4 items-start w-full">
          <img
            src={secondaryImages[0]}
            alt={`${title} secondary image 1`}
            className="flex-1 rounded-3xl h-[100px] object-cover"
          />
          <img
            src={secondaryImages[1]}
            alt={`${title} secondary image 2`}
            className="flex-1 rounded-3xl h-[100px] object-cover"
          />
          <div className="flex items-center justify-center text-2xl font-bold text-white bg-purple-500 rounded-3xl h-[100px] w-[100px]">
            {count}+
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 items-start w-full">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="flex gap-3 items-center w-full">
          <img
            src={creatorAvatar}
            alt={`${creatorName}'s avatar`}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-base text-white">{creatorName}</span>
        </div>
      </div>
    </article>
  );
};

export default CollectionCard;
