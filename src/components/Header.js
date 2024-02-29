import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li>Cart</li>
        <button className="login-btn" 
         onClick={
            
            ()=>{  btnName==="login"?setbtnName("logout"):setbtnName("login")
            
        
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