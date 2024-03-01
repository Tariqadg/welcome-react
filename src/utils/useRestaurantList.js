import {RES_DATA_API} from "../utils/constants"
import { useState, useEffect } from "react";
const useRestaurantList=()=>{
    const [newList, setnewList] = useState([]);
    const [filterednewList, setfilterednewList] = useState([]);
    
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
}
