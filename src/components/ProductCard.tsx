// import React from 'react'
import Image from "./Image";

interface IProps {
  imageLink: string;
  imageAlt: string;
}

function ProductCard({ imageLink, imageAlt }: IProps) {
  return (
    <div className="border-7 bg-slate-200 rounded-lg p-1 h-auto">
      <Image
        imageLink={imageLink}
        imageAlt={imageAlt}
        className="rounded-xl w-72 h-40 object-cover p-2"
      />
      <p className="mx-2 text-lg mt-1">Ferrari</p>

      <div className="flex flex-row justify-between mb-2 items-center">
        <span className="mx-2 text-sm">$100,000</span>
        <span className="mr-2">
          <Image
            imageLink={imageLink}
            imageAlt={imageAlt}
            className="w-7 h-7 rounded-full"
          />
        </span>
      </div>
      <div>
        <p className="text-sm mx-2 mb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          quae distinctio
        </p>
      </div>
      <div className="flex space-x-2 ml-2">
        <span className="w-4 h-4 rounded-full bg-red-600 inline-block" />
        <span className="w-4 h-4 rounded-full bg-green-600 inline-block" />
        <span className="w-4 h-4 rounded-full bg-blue-600 inline-block" />
        <span className="w-4 h-4 rounded-full bg-yellow-600 inline-block" />
      </div>
      <div className="flex space-x-2 items-center justify-around">
        <button className="rounded-md bg-red-600 text-center text-white w-28 my-4">
          Delete
        </button>
        <button className="rounded-md bg-blue-600 text-center text-white w-28 my-4">
          Show
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
