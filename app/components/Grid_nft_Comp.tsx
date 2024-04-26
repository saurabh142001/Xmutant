"use client";

import { cn } from "@/app/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto  pt-16 pb-20  ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string | React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.4] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="cart-icon  ml-2">
        {typeof image === 'string' ? (
          <img
            src={image}
            alt="NFT Image"
            className="h-40 w-96 relative rounded-2xl   dark:border-white/[0.2] border border-transparent p-1 mx-auto mb-6"
          />
        ) : (
          image // Assuming image is already a ReactNode
        )}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-serif font-bold text-neutral-600 dark:text-neutral-200 pb-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
