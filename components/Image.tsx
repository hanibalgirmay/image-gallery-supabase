import React from "react";
import Image from "next/image";

const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
}

type Image = {
  id: number,
  name: string,
  username: string,
  imageSrc: string,
  href: string
}

const CustomImage = ({image}: {image: Image}) => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <a href={image.href} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 overflow-hidden rounded-lg bg-gray-200">
        <Image
          layout="fill"
          objectFit="cover"
          src={image.imageSrc}
          className={cn(
            "group-hover:opacity-75 duration-700 ease-in-out",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={() => setIsLoading(false)}
          alt={image.name}
        />
      </div>
        <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">@{image.username}</p>
    </a>
  );
};

export default CustomImage;
