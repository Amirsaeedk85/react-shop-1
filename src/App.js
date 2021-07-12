import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductFilters from "./components/ProductFilters/ProductFilters";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <main>
        <section className="main">
          <section className="filters">
            <ProductFilters />
          </section>
          <section>
            <div className="product-container">
              <div className="product-item">
                <ProductCard />
              </div>
              <div className="product-item">
                <ProductCard />
              </div>
              <div className="product-item">
                <ProductCard />
              </div>
              <div className="product-item">
                <ProductCard />
              </div>
              <div className="product-item">
                <ProductCard />
              </div>
              <div className="product-item">
                <ProductCard />
              </div>
            </div>
          </section>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
