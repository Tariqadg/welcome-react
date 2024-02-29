import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const {resid}=useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resid);

    const json = await data.json();
    console.log(json)
    setresInfo(json.data);
  };
  

  
  if (resInfo === null) {
    return <Shimmer />;
  }


  const{name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
  
  const{itemCards}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  return (
    <div className="menu">
      

      <h1>{name}</h1>
      <h5>{cuisines.join(",")}</h5>
        <h5>{costForTwoMessage}</h5>

      <h3>menu</h3>
      <ul>
        {itemCards.map((item)=>(
          <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {item?.card?.info?.price}</li>
        ))}
       
      </ul>
    </div>
  );
};
export default RestaurantMenu;
