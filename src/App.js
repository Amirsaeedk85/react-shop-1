import React from "react";
import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductFilters from "./components/ProductFilters/ProductFilters";
import Header from "./components/Header/Header";
import {productList} from "./data/data";
function App() {
  const [FilteredProductList, setFilteredProductList] = useState(productList);
  const addProduct = () => {
    console.log('hello world')
    const product = {
      id: 6,
      title: "Parastu",
      imgsrc:
        "https://react-shopping-cart-seven-lovat.vercel.app/images/dress6.jpg",
      price: 100
    };

    setFilteredProductList([...FilteredProductList,product]);
  };
  const handleRemove = (id) =>{
    setFilteredProductList(FilteredProductList.filter(item=>item.id!==id))
  }

  return (
    <>
      <Header title={"React shopping card"} />
      <div className="main">
        <div className="filters">
          <ProductFilters />
          <button onClick={addProduct}>Add product</button>
        </div>
        <div className="product-container">
          {FilteredProductList.map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard
                imgsrc={product.imgsrc}
                title={product.title}
                price={product.price}
                onClick={()=>handleRemove(product.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
