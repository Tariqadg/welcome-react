import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";
const useRestaurantMenu = (resid) => {
  const [resInfo, setresInfo] = useState(null);
  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {

    const data = await fetch(MENU_API + resid);
    const json = await data.json();
    setresInfo(json.data);
    
  };

  return resInfo;
};
export default useRestaurantMenu;
