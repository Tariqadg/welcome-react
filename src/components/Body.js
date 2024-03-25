import RestaurantCard,{withvegLabel} from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {RES_DATA_API} from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";


const Body = () => {
  const [newList, setnewList] = useState([]);
  const [filterednewList, setfilterednewList] = useState([]);
  // console.log(newList)
  const [searchText, setsearchText] = useState("");
  const RestaurantCardveg=withvegLabel(RestaurantCard)
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_DATA_API);

    const json = await data.json();

    setnewList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(newList)
    setfilterednewList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
  };


  const onlineStatus=useOnlineStatus();

  if (onlineStatus===false)
  return(
  <h1> Looks like you are Offline!!!! check your internet connectivity..... </h1>)
    
  const {loggedinuser,setuserName}=useContext(userContext);
  console.log(newList)
  

  return newList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter flex ">
        <div className="search m-4 p-4">
          <input
            type="text"
            className=" mx-2  p-1 px-1 border-2 border-solid border-gray-300 rounded-md"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          < button className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-green-200"
            onClick={() => {
              const filteredRestaurant = newList.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterednewList(filteredRestaurant);
            }}
          > search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button 
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 "
          onClick={() => {
            const filteredList = newList.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setfilterednewList(filteredList);
          }}
        >Top Rated Restaurant
        </button>

        </div>
        <div className="search m-4 p-4 flex items-center">
        <label className="font-semibold mx-2  p-1 px-1 border-1 border-solid border-gray-300 rounded-md text-white bg-red-500">Username</label>
        <input className=" mx-1  p-1 px-1 border-2 border-solid border-gray-300 rounded-md"
        placeholder="Enter Username......"l
        value={loggedinuser}
        onChange={(e)=>{setuserName(e.target.value)}} >

        </input>
        

        </div>

        
      </div>
      <div className="mx-40 flex flex-wrap  ">
        {filterednewList?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant?.info?.id}>
             {restaurant.info.veg ? (<RestaurantCardveg resData={restaurant}/>) : (
            <RestaurantCard resData={restaurant} />)
            }

          </Link>
          
        ))}
      </div>
    </div>
  );
};
export default Body;
