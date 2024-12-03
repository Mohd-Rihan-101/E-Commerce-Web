// import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, search, filter, addToCart }) => {
  const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "" || product.category === filter)
  );

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
