import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data';
import './ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams();
  const product = Data.find((item) => item.id === parseInt(id));

  return (
  
    <div className="product-details">
      <h1>{product.name}</h1>
      {product.image ? (
        <img src={product.image} alt={product.name} />
      ) : (
        <img src="https://via.placeholder.com/150" alt="Product Image" />
      )}
      <p> Price: 
        {product.sale ? (
          <span>
            <s>Rs. {product.price}</s>
            <span className="discount-price">Rs. {product.price - (product.price * product.discount / 100)}</span>
          </span>
        ) : (
          <span>Rs. {product.price}</span>
        )}</p>
      {product.price < 1000 && (
        <span className="badge budget-friendly">Budget-Friendly</span>
      )}
      {product.price > 50000 && (
        <span className="badge premium-product">Premium Product</span>
      )}
      <p>
        Stock: {product.stock > 0 ? (
          <span className="in-stock">In Stock</span>
        ) : (
          <span className="out-of-stock">Out of Stock</span>
        )}
        {product.stock < 5 && product.stock > 0 && (
          <span className="low-stock-warning">
            Hurry, only {product.stock} items left!
          </span>
        )}
      </p>
      {product.sale && (
        <span className="discount-label">Discount Available!</span>
      )}
      {product.price > 5000 && (
        <span className="free-shipping">Free Shipping</span>
      )}
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;