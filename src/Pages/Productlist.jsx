import React from "react";
import { useState, useEffect } from "react";
import Card from "../Components/Card";
import axios from "axios";

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
    const filteredProducts = products.filter((item) => {
      return item.category == e.target.value;
    });
    setFilteredProducts(filteredProducts);
  };

  const handleInput = (e) => {
    const filteredProducts = products.filter((item) =>
      item.title.toLowerCase().includes(e.target.value)
    );
    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="px-4 min-h-screen">
      <div className="container mx-auto px-4 my-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
            <label
              htmlFor="search"
              className="text-lg font-medium text-gray-700"
            >
              Search
            </label>
            <input
              id="search"
              onInput={handleInput}
              className="w-60 md:w-72 border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="search"
              placeholder="Search product name"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
            <label
              htmlFor="category-filter"
              className="text-lg font-medium text-gray-700"
            >
              Filter Category
            </label>
            <select
              id="category-filter"
              onChange={handleCategory}
              className="w-60 md:w-72 border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
          </div>
        </div>
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
};

export default Productlist;
