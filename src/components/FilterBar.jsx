import React from 'react';

const FilterBar = ({ setFilterCategory, setSortOrder }) => (
  <div className="filter-bar">
    <select onChange={(e) => setFilterCategory(e.target.value)}>
      <option value="all">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelry</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
    </select>
    <select onChange={(e) => setSortOrder(e.target.value)}>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  </div>
);

export default FilterBar;
