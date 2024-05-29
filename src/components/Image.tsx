// import React from 'react'

interface IProps {
  imageLink: string;
  imageAlt: string;
  className?: string;
}

function Image({ imageLink, imageAlt, className }: IProps) {
  return (
    <>
      <img src={imageLink} alt={imageAlt} className={className} />
    </>
  );
}

export default Image;
