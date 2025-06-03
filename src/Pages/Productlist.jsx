import React from 'react'
import { useState,useEffect } from 'react'
import Card from '../Components/Card';
import axios from 'axios';

const Productlist = () => {
   const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios.get("./Products.json");
    setProducts(response.data);
    setFilteredProducts(response.data);
  };

  const handleCategory = (e) => {
    if (e.target.value == "All") {
      setFilteredProducts(products);
      return;
    }
    const filteredUsers = products.filter((item) => {
      return item.category == e.target.value;
    });
    setFilteredProducts(filteredUsers);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="px-4 min-h-screen">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-end items-center gap-4 m-5 mb-10">
  <label htmlFor="" className="text-lg font-medium text-gray-700">
    Filter Category
  </label>
  <select
    id="category-filter"
    onChange={handleCategory}
    className="w-60 md:w-72 border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="All">All</option>
    <option value="men's clothing">men's clothing</option>
    <option value="jewelery">jewelery</option>
    <option value="electronics">electronics</option>
    <option value="women's clothing">women's clothing</option>
  </select>
</div>


      <div className="mx-auto max-w-7xl pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {filteredProducts?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productlist