import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {loginPage} from "./Login";

const Header=()=>{

const [btnName,setbtnName]=useState("login");
    
return(

    <div className="header">
    <div className="logocontainer">
        <img className="logo" 
        src={LOGO_URL}/>
    </div>
    <div className="nav-items">
    <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About us</li>
        <li>Cart</li>
        <button className="login-btn" 
         onClick={
            
            ()=>{ {console.log(<loginPage />)} btnName==="login"?setbtnName("logout"):setbtnName("login")
            
        
    }
           
        }>
        
           
         {btnName}  
        </button>
    </ul>
    </div>
</div>
)
}

export default Header;