import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory=({data})=>{
    const [showitems,setshowitems]=useState(false)
     const handleclick=()=>(
        setshowitems(!showitems)
       )
   
    return(
        <div>
        <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer  " onClick={handleclick}>
            <span className="font-bold text-lg ">{data.title} ({data?.itemCards?.length})</span>
            <span>⬇️</span>  
            </div>
            <div>
            {showitems &&<ItemList  items={data?.itemCards}/> }   
            </div> 
        </div>
       
        </div>
       
    )
}
export default RestaurantCategory