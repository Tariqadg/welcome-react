import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body=()=>{
const [newList,setnewList]=useState([]);
 
useEffect(()=>{
    fetchData();
 },[]
 );
const fetchData=async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

const json= await data.json();
setnewList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
}
// 
if(newList.length===0){
    return <Shimmer/> 
} 

return(
<div className="body">
    <div className="res-btn"><button className="filter.btn"
    onClick={()=>{ 
          const filteredList =newList.filter((res)=>res.info.avgRating > 4.3
         );
        setnewList(filteredList)  
        console.log("topRatedclickedworked") 
    }
    }
    >Top Rated Restaurant
    </button> 
    </div>
    <div className="res-container">
        {
           newList.map((restaurant)=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
           
        }  
    </div>
</div>
)
}
export default  Body;