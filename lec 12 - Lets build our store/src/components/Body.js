import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import restaurantList from "../../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
  //Local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList); //Similar to `let listOfRestaurants`(Normal JS variable)
  const [filteredRestaurant, setFilteredrestaurant] = useState([]);

  //Here listOfRestaurants is the state variable, and setListOfRestaurants is another variable to update the listOfRestaurants
  // - as this is the state variable not a nornmal js variable.

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);
    const json = await data.json();

    setListOfRestaurants(
      //optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredrestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
    // console.log(listOfRestaurants[0].info.aggregatedDiscountInfoV3.header);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline! Check your internet connection</h1>;
  }

  const { setUserName, loggedInUser } = useContext(UserContext);

  //conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return (
    <div className="body">
      <div className="w-[100%] flex items-center justify-between">
        <div className="w-[100%] flex justify-start">
          <input
            type="text"
            className="w-[60%] py-[6px] px-[6px] text-[1.2rem] text-[#3d3d3d] bg-transparent border-1 border-[#818181] border-r-0 border-[1px] rounded-l-[8px] outline-none focus:border-orange-700 transition-all"
            placeholder="Type the restaurant name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="py-[10px] px-[10px] text-[1.2rem] text-[#fff] bg-orange-700 rounded-r-[8px] border-none hover:bg-[#016034]"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredrestaurant(filteredRestaurant);
            }}>
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="py-[6px] px-[10px] text-[1.2rem] text-[#fff] bg-orange-700 rounded-[8px] border-none hover:bg-[#016034]"
            onClick={() => {
              const filteredList = restaurantList.filter(
                (restaurant) => restaurant.data.avgRating > 4
              );
              setListOfRestaurants(filteredList);
              console.log(filteredList);
            }}>
            Top Rated Restaurants
          </button>
          <label>UserName</label>
          <input
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant.info.id}>
              {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
                <RestaurantCardPromoted
                  {...restaurant?.info}
                  discountHeader={
                    restaurant.info.aggregatedDiscountInfoV3.header +
                    " - " +
                    restaurant.info.aggregatedDiscountInfoV3.subHeader
                  }
                />
              ) : (
                <RestaurantCard {...restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
// data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.aggregatedDiscountInfoV3.header
