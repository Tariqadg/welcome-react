import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {RES_DATA_API} from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [newList, setnewList] = useState([]);
  const [filterednewList, setfilterednewList] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_DATA_API);

    const json = await data.json();
    setnewList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterednewList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus=useOnlineStatus();

  if (onlineStatus===false)
  return(
  <h1> Looks like you are Offline!!!! check your internet connectivity..... </h1>)
    
  

  return newList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="filter.search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestaurant = newList.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterednewList(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>

        <button
          className="filter.btn"
          onClick={() => {
            const filteredList = newList.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setfilterednewList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterednewList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
