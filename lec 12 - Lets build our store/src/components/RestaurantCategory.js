import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showMenuItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="restaurant-category">
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <div className="text-[40px]">
            {showMenuItems ? <MdKeyboardArrowUp /> : <RiArrowDownSLine />}
          </div>
        </div>
        {/* <ItemList items={data.itemCards} /> */}
        {showMenuItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
