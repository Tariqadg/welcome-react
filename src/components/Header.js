import { LOGO_URL } from "../utils/constants";
import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const onlineStatus=useOnlineStatus();
  const {loggedinuser,setuserName}=useContext(userContext);
  

  return (
    <div className="flex justify-between  bg-pink-100 shadow-lg">
      <div className="logocontainer flex justify-between">
        <img className="w-[9rem] h-[9rem] " src={LOGO_URL} />
        <div className="my-12  ml-2">
      <h1 className="font-sans  font-extrabold  text-green-600 bg-transparent text-4xl ">FoodManga</h1>
      </div>
      </div>
      
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            OnlineStaus:{onlineStatus ?"✅":"🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4 font-bold">{loggedinuser}</li>
          
          <button
            className="login-btn"
            onClick={() => {
              btnName === "login" ? setbtnName("logout") : setbtnName("login");
            }}
          ><Link to="/login">
            {btnName}</Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
