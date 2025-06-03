import React from "react";

const Card = ({item}) => {
  return (
    <div className="w-64 bg-blue-50 shadow-lg rounded-2xl p-5 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <h2 className="text-base font-semibold mb-4 text-gray-800 text-center line-clamp-2 min-h-[48px]">
          {item.title}
        </h2>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 object-contain px-4 mb-4"
        />

        <div className="flex flex-col items-center mb-3">
          <div className="flex text-yellow-500 text-lg mb-1">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        <p className="text-center text-lg font-bold text-blue-700 bg-blue-100 px-4 py-1 rounded-full w-fit mx-auto mb-4">
          ${item.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
