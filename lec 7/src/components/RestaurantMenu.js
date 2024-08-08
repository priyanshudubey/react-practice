import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    console.log("Helloooooooooo");
    console.log("This is Json: ", json);
    setResInfo(json.data);
  };
  console.log("Hello - ", resInfo);
  const { avgRating, costForTwoMessage, cuisines, name } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  console.log("Items: ", itemCards);
  return (
    <div className="menu">
      <h1>Restaurant Name: {name}</h1>
      <h2>Average Rating: {avgRating}</h2>
      <h2>Cost for Two: {costForTwoMessage}</h2>
      <h2>cuisines: {cuisines}</h2>
      <h2>Name: {name}</h2>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs. "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}{" "}
        <li>Biryani</li>
        <li>Chicken</li>
        <li>Chicken Biryani</li>
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
