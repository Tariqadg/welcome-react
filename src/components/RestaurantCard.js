import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    const{resData}=props;
    
    const {
        cloudinaryImageId,
         name,
         cuisines,
         avgRating,
         
         costForTwo,
        }=resData?.info;

    const{deliveryTime}=resData?.info?.sla
    

    return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200"> 
    <img className="rounded-lg h-[200px] w-[240] " 
    alt="res-logo"
    src={CDN_URL+cloudinaryImageId}
    />
    <h3 className="font-bold py-4 text-lg">{name}</h3>
    <h4>{cuisines?.join(", ")}</h4>
    <h4>{costForTwo }</h4>
    <h4 >{avgRating}⭐ </h4>
    <h4>{deliveryTime}-minutes</h4>

    
    
    </div>
    )
}
export const withvegLabel=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute font-semibold bg-green-600 text-white mx-2 px-2 rounded-md">Veg</label>
                <RestaurantCard {...props}/>
            </div>

        )
    }
} 
export default RestaurantCard;