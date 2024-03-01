import Searchbar from "./Searchbar.js";
import {Link} from 'react-router-dom';
var loggedIn;
var loginStatus;
const Navbar = () => {
    loggedIn=false
    loginStatus="Login"
    if(loggedIn === true){
        loginStatus="Account"
    }
    return (
        <div className="head">
            <div className="banner">
                Get delicious food delivered to your hostel!
            </div>
            <nav className = "navbar">
               <Link to='/'> <h1>Aroma's Delight Dhaba</h1></Link>
                {/* <input className="search" type="text" placeholder="Search..." /> */}
                <Searchbar/>
               <Link to='/Categories'>Categories</Link>
               <Link to='/Cart'>Cart</Link>
               <Link to="/Login">{ loginStatus }</Link>
            </nav>
        </div>
    );
}
 
export default Navbar;