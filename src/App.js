import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from  "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu.js";
import userContext from "./utils/UserContext.js";

import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";


const AppLayout=()=>{
   const [userName,setuserName]=useState()
//fetching api
useEffect(()=>{
   const data={
      name:"tariq"
   };setuserName(data.name)
},[]
);

return(
<div >
   <userContext.Provider  value={{loggedinuser:userName,setuserName}}>
   <Header />
   <Outlet/>
   </userContext.Provider>
</div>)
}


const appRouter=createBrowserRouter([
   {


      path:"/",
      element:<AppLayout/>,
      children:[
         {
            path: "/",
            element:<Body/>,
         },
         {
            path: "/about",
            element:<About/>,
         },
         {
            path: "/contact",
            element:<Contact/>,
         },
         {
            path: "/restaurants/:resid",
            element:<RestaurantMenu/>,
         },
         {
            path: "/login",
            element:<Login/>,
         },
         
      ],
      errorElement:<Error/>,
     
     
   },
]);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);