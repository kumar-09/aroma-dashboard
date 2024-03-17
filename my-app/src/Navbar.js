import Searchbar from "./Searchbar.js";
import {Link} from 'react-router-dom';
import {useState} from 'react';
import DropDown from './LoginPage/Dropdown.js';
import catgimg from './image/category-svgrepo-com.svg'
import cartimg from './image/cart-3-svgrepo-com.svg'
import loginimg from './image/login-svgrepo-com.svg'
const Navbar = (props) => {
    var NavbarRef = props.NavbarRef;
    var loggedIn = props.loggedIn;
    var email = props.email;
    const foodList = props.foodList;
    const setLoggedIn = props.setLoggedIn;
    // console.log(foodList);
    const [Hover, setHover] = useState(false);
    const handleMouseEnter = () => {
        setHover(true);
      };
   // for showing active navlink
    const [activeNavlink, setactiveNavlink] = useState(null);
      const handleMouseLeave = () => {
        setHover(false);
      };
    return (
        <div className="head" id="head" ref={NavbarRef}>
            <div className="banner">
                Get delicious food delivered to your hostel!
            </div>
            <nav className = "navbar">
               <Link to='/'> <h1 >Aroma's Delight Dhaba</h1></Link>
                {/* <input className="search" type="text" placeholder="Search..." /> */}
                <Searchbar items={foodList} />
               <Link to='/Categories' className="nav-links" ><img src={catgimg} style={{width: '25px'}}></img> Categories</Link>
               <Link to='/Cart' className="nav-links"><img src={cartimg} style={{width: '25px'}}></img>Cart</Link>
               {loggedIn ? 
               <div style={{display:"flex", flexDirection:"column"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Link className="nav-links" to='/account' id = "acc" >{email}</Link>
                    {Hover && <DropDown/>}
                </div> : <Link to='/Login' className="nav-links" ><img src={loginimg} style={{width: '25px'}}></img>Login</Link>}
            </nav>
        </div>
    );
}
 
export default Navbar;