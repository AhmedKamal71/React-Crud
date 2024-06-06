// import React from 'react'

import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputs, products } from "./data/inedex";
import { IFormInput, IProduct } from "./interfaces/Index";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const productsList = products.map((product: IProduct) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputs = formInputs.map((input: IFormInput) => (
    <div key={input.id} className="flex flex-col">
      <label htmlFor={input.id} className="font-bold">
        {input.label}
      </label>
      <Input type={input.type} id={input.id} name={input.name} />
    </div>
  ));

  return (
    <>
      <div>
        <h1 className="text-4xl text-center font-bold mt-5">All Products</h1>
        <div className="flex justify-center">
          <Button
            onClick={openModal}
            className="bg-blue-600 rounded-md p-2 m-2 font-bold text-white hover:bg-blue-500"
          >
            Add New Product
          </Button>
        </div>
      </div>
      <div className="container mx-auto grid gap-y-5 p-5 border-6 border-gray-300 rounded-lg sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center items-center">
        {productsList}
      </div>
      <Modal
        openModel={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
        title="Create Product"
      >
        {renderFormInputs}
        <div className="flex space-x-3 justify-center">
          <Button
            onClick={openModal}
            className="bg-green-600 rounded-md p-2 m-2 font-bold text-white hover:bg-green-500 w-24"
          >
            Submit
          </Button>
          <Button
            onClick={closeModal}
            className="bg-red-600 rounded-md p-2 m-2 font-bold text-white hover:bg-red-500 w-24"
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default App;
