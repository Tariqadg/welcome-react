import {CDN_URL} from "../utils/constants"

const ItemList = ({ items }) => {
  console.log(items)
  // console.log(item.card.info.name)
  return (
    <div >
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex">
          <div className="w-9/12">
          <div className="py-2  ">
            <span className="font-semibold cursor-pointer">{item?.card?.info?.name}</span>
            <span className="font-semibold ">- ₹ {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
          </div>
          <p className="text-xs">{item?.card?.info?.description}</p>
        </div>
         <div className="w-3/12 ">
            <div className="p"> 
            <button className=" bg-black text-white rounded-sm shadow-lg mx-[60px] ">Add+</button>
            </div>
            <img  className=" mx-[60px]  w-[6rem] h-[6rem]" src={CDN_URL+item?.card?.info?.imageId}/>
        </div>
    </div>

      ))}
    </div>
  )
};
export default ItemList;
