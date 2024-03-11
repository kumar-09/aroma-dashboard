import Searchbar from "./Searchbar.js";
import {Link} from 'react-router-dom';
import {useState} from 'react';
import DropDown from './LoginPage/Dropdown.js';
const Navbar = (props) => {
    var HeaderRef = props.HeaderRef;
    var loggedIn = props.loggedIn;
    var email = props.email;
    const foodList = props.foodList;
    const setLoggedIn = props.setLoggedIn;
    // console.log(foodList);
    const [Hover, setHover] = useState(false);
    const handleMouseEnter = () => {
        setHover(true);
      };
    
      const handleMouseLeave = () => {
        setHover(false);
      };
    return (
        <div className="head" id="head" ref={HeaderRef}>
            <div className="banner">
                Get delicious food delivered to your hostel!
            </div>
            <nav className = "navbar">
               <Link to='/'> <h1>Aroma's Delight Dhaba</h1></Link>
                {/* <input className="search" type="text" placeholder="Search..." /> */}
                <Searchbar items={foodList} />
               <Link to='/Categories'>Categories</Link>
               <Link to='/Cart'>Cart</Link>
               {loggedIn ? 
               <div style={{display:"flex", flexDirection:"column"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Link to='/account' id = "acc" >{email}</Link>
                    {Hover && <DropDown/>}
                </div> : <Link to='/Login' >Login</Link>}
            </nav>
        </div>
    );
}
 
export default Navbar;