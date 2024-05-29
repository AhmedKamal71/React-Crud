// import React from 'react'

import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-5 container gap-5 border-8 border-black-300 p-5 justify-center align-middle">
        <ProductCard
          imageLink="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
          imageAlt="Corvette"
        />
        <ProductCard
          imageLink="https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg"
          imageAlt="Ferrari"
        />
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </>
  );
}

export default App;
