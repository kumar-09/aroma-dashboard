import Searchbar from "./Searchbar.js";
import {Link} from 'react-router-dom';
import {useState} from 'react';
import DropDown from './LoginPage/Dropdown.js';
import catgimg from './image/category-svgrepo-com.svg'
import cartimg from './image/cart-3-svgrepo-com.svg'
import loginimg from './image/login-svgrepo-com.svg'
import accountimg from './image/mine-svgrepo-com.svg'
import adminimg from './image/admin-svgrepo-com.svg'
const Navbar = (props) => {
    var NavbarRef = props.NavbarRef;
    var loggedIn = props.loggedIn;
    var name = props.name;
    const foodList = props.foodList;
    const setLoggedIn = props.setLoggedIn;

    
    const handleMouseEnter = () => {
        props.setHover(true);
      };
   // for showing active navlink
    const [activeNavlink, setactiveNavlink] = useState(null);
      const handleMouseLeave = () => {
        props.setHover(false);
      };
    return (
        <div className="head" id="head" ref={NavbarRef}>
            <div className="banner">
                Get delicious food delivered to your hostel!
            </div>
            <nav className = "navbar">
               <Link to='/'> <h1 >AROMAS</h1></Link>
                <Searchbar items={foodList} setSearchInput = {props.setSearchInput}/>
               <Link to='/Categories' className="nav-links" ><img src={catgimg} alt={""} style={{width: '25px'}}></img> Categories</Link>
               {!props.admin ? 
               <Link to='/Cart' className="nav-links"><img src={cartimg} alt={''} style={{width: '25px'}}></img>Cart
               </Link>:
               <Link to='/admin' className="nav-links" ><img src={adminimg} alt={''} style={{width: '25px', opacity: '0.6',}}></img>Admin</Link>}
               {loggedIn ? 
               <div style={{display:"flex", flexDirection:"column"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Link className="nav-links" to='/account' id = "acc" style={{padding:'5px'}}><img src={accountimg} alt={""} style={{width: '27px', opacity: '0.6', padding:'0px'}}/>{name}</Link>
                </div> : <Link to='/Login' className="nav-links" ><img src={loginimg} alt={""} style={{width: '25px'}}></img>Login</Link>}
            </nav>
        </div>
    );
}
 
export default Navbar;