"use client";

import React from "react";
import CollectionCard from "./CollectionCard";

const TrendingCollection: React.FC = () => {
  const collections = [
    {
      id: 1,
      title: "DSGN Animals",
      creatorName: "MrFox",
      creatorAvatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/da9c9e80c6dae4d3bfd753d4ed8eed5a8d5b15a7?placeholderIfAbsent=true",
      primaryImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/acb0b4e805946cabbbbeb3eddba968d2785dbf6a?placeholderIfAbsent=true",
      secondaryImages: ["https://cdn.builder.io/api/v1/image/assets/TEMP/a4dfe56fa99a6c6be618a860391c3bf6c2c0cbd6?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/cbdf3917a888c82fb9b40e630c9767ac43fd6af3?placeholderIfAbsent=true"],
      count: 1025,
    },
    {
      id: 2,
      title: "Magic Mushrooms",
      creatorName: "Shroomie",
      creatorAvatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b699f0ca3356c95eae6eac86c8dfea7653a55a4?placeholderIfAbsent=true",
      primaryImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/19f129e5a6b3a09e8e5d1eacaab46613bc90c19d?placeholderIfAbsent=true",
      secondaryImages: ["https://cdn.builder.io/api/v1/image/assets/TEMP/5f77561b9ffdbc6c5e8dde20327ca7cd559167e0?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/2ac745a3ccfd01cf0a933ac3c5dcb06335222c32?placeholderIfAbsent=true"],
      count: 1025,
    },
    {
      id: 3,
      title: "Disco Machines",
      creatorName: "BeKind2Robots",
      creatorAvatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/18fde751276e2882a75ac8133217dab10a743aa8?placeholderIfAbsent=true",
      primaryImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/206060c128e1705b08c3554db2beee747c15ada0?placeholderIfAbsent=true",
      secondaryImages: ["https://cdn.builder.io/api/v1/image/assets/TEMP/21364b47236deeee0cb43a0fe4f2f4bf52774d70?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/b87243a4b99cee234fd1b5dc3c0037ada50ef51c?placeholderIfAbsent=true"],
      count: 1025,
    },
  ];

  return (
    <section className="flex flex-col gap-16 items-center px-0 py-20 bg-zinc-800">
      <header className="flex flex-col gap-2.5 items-start w-[1046px] max-md:w-[90%] max-sm:w-[90%]">
        <h2 className="text-4xl font-bold leading-tight text-white">
          Trending Collection
        </h2>
        <p className="text-2xl leading-relaxed text-white">
          Checkout our weekly updated trending collection.
        </p>
      </header>
      <div className="flex gap-8 items-start w-[1050px] max-md:flex-col max-md:items-center max-md:w-[90%] max-sm:flex-col max-sm:items-center max-sm:w-[90%]">
        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            title={collection.title}
            creatorName={collection.creatorName}
            creatorAvatar={collection.creatorAvatar}
            primaryImage={collection.primaryImage}
            secondaryImages={collection.secondaryImages as [string, string]}
            count={collection.count}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingCollection;
