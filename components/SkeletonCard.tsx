import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="px-2 flex flex-col gap-1.5">
      <div className="w-full aspect-square">
        <Skeleton height="100%" width="100%" />
      </div>
      <Skeleton height={24} width="80%" />
      <div className="flex gap-0.5 items-center">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} width={20} height={20} />
          ))}
      </div>
      <Skeleton height={20} width="50%" />
      <Skeleton height={40} width="100%" />
    </div>
  );
};

export default SkeletonCard;
