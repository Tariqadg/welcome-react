import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import datalist from "../utils/mockdata";
const Body=()=>{

    const [newList,setnewList]=useState(datalist);
    return(

    <div className="body">
    <div className="res-btn"><button className="filter.btn"
    onClick={()=>{
         
         const filteredlist=newList.filter((res)=>res.info.avgRating > 4.3
         );
        
        setnewList(filteredlist)
        
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