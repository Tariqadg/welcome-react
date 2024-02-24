import { LOGO_URL } from "../utils/constants";
const Header=()=>
    (
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
    </ul>
    </div>
</div>
)

export default Header;