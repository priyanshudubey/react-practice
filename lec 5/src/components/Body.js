import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList); //Similar to `let listOfRestaurants`(Normal JS variable)

  //Here listOfRestaurants is the state variable, and setListOfRestaurants is another variable to update the listOfRestaurants
  // - as this is the state variable not a nornmal js variable.

  let topRatedRestaurant = [];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (restaurant) => restaurant.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              {...restaurant.data}
              key={restaurant.data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
