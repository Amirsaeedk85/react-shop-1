import React from "react";
import './style.css';

function ProductFilters() {
  return (
    <div>
      <div className="filters-container">
        <div>6 products</div>
        <div>
          <label htmlFor="order">Order</label>
          <select id="order">
            <option>Latest</option>
            <option>Lowest</option>
            <option>Highest</option>
          </select>
        </div>
        <div>
          <label htmlFor="filter">Filter</label>
          <select id="filter">
            <option>All</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductFilters;
