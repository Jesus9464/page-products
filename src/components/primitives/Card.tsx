/* eslint-disable @next/next/no-img-element */
import { ParsedDataItem } from "@/common/helpers";
import { renderStars } from "@/common/helpers/format";
import React from "react";

type Props = {
  item: ParsedDataItem;
  onClick?: () => void;
};

const Card: React.FC<Props> = ({ item, onClick }) => {
  return (
    <div
      key={item.id}
      className="max-w-sm mx-4 my-8 bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <span className="text-gray-900 font-semibold">
          {item.price} {item.currency}
        </span>
        <span className="text-yellow-500 font-bold">
          {renderStars(item.rating)}
        </span>
      </div>
      {onClick && (
        <div className="flex justify-center mt-4 mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
            onClick={onClick}
          >
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
