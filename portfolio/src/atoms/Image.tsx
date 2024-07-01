import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-800 h-450 bg-slate-100" />;
};

export default Image;
