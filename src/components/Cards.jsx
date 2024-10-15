import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt={item.name} />
      </Link>
      <h2>{item.name}</h2>
      <p>  Rating: {item.rating}</p>
      <p> Category: {item.category}</p>
    </div>
  );
};

export default Cards;