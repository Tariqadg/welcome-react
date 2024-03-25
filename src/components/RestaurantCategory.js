import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory=({data,showItems,setShowIndex})=>{
    const [isOpen1, setIsOpen1] = useState(showItems);
     const handleclick=()=>(
        setIsOpen1((prev)=>!prev)
    
       )
   
    return(
        <div>
        <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer  " onClick={handleclick}>
            <span className="font-bold text-lg ">{data.title} ({data?.itemCards?.length})</span>
            <span>⬇️</span>  
           
            </div>
            <div>
            {isOpen1 &&(<ItemList  items={data?.itemCards}/> )}   
            </div> 
        </div>
       
        </div>
       
    )
}
export default RestaurantCategory