import React from "react";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "rectangular" | "circular";
  count?: number;
}

export const LoadingSkeleton: React.FC<SkeletonProps> = ({
  className = "",
  variant = "text",
  count = 1,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "circular":
        return "rounded-full aspect-square";
      case "rectangular":
        return "rounded-2xl";
      case "text":
      default:
        return "rounded-md h-4";
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-gradient-to-r from-[#E9E4F3] via-[#D8CDEE]/50 to-[#E9E4F3] bg-[length:200%_100%] ${getVariantStyles()} ${className}`}
        />
      ))}
    </>
  );
};
