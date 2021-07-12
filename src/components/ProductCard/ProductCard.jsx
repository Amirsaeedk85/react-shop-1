import React from "react";
import './style.css';

function ProductCard() {
  return (
    <div>
      <div className="product-card">
        <div className="product-card-1">
          <img
            src="https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg"
            alt="Midi sundress with shirring detail"
          />
          <p>Midi sundress with shirring detail</p>
        </div>
        <div className="product-card-2">
          <div>$29.5</div>
          <div>
            <button>Add to card</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
