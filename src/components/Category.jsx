import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data';
import Cards from './Cards';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const categoryData = Data.filter((item) => item.category === categoryId); // Filter items by category
  const items = categoryData.length ? categoryData : []; // Ensure items is an array

  return (
    <div className="category-page">
      <h1>{categoryId}</h1>
      <div className="cards">
        {items.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;