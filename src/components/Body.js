import RestaurantCard from "./RestaurantCard";
import datalist from "../utils/mockdata";


const Body=()=>(
    <div className="body">
    <div className="search">
        <form >
            <label htmlFor="fname"></label>
            <input type="text" id="fname" name="fname"/>
            <input type="submit" value="Submit"/>
        </form>

           
    </div>
    <div className="res-container">
        {
           datalist.map((restaurant)=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
           
        }  
    </div>
    </div>
)
export default  Body;