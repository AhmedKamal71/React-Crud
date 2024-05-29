// import React from 'react'

import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { products } from "./data/inedex";
import { IProduct } from "./interfaces/Index";

function App() {
  const productsList = products.map((product: IProduct) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <>
      <div className="container mx-auto grid gap-y-5 p-5 border-6 border-gray-300 rounded-lg sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center items-center">
        {productsList}
      </div>
      <Modal />
    </>
  );
}

export default App;
