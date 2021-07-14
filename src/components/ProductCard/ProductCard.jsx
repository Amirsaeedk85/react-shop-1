import React from "react";
import "./style.css";

function ProductCard({imgsrc = "", title = "", price = 0,buttonTitle='Add to Cart',onClick}) {
  return (
    <div>
      <div className="product-card">
        <div className="product-card-1">
          <img src={imgsrc} alt="product_image" />
          <p>{title}</p>
        </div>
        <div className="product-card-2">
          <div>${price}</div>
          <div>
            <button onClick={onClick}>{buttonTitle}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
