import Searchbar from "./Searchbar.js";

const Navbar = () => {
    var loggedIn=false
    var loginStatus="Login"
    if(loggedIn === true){
        loginStatus="Account"
    }
    return (
        <div className="head">
            <div className="banner">
                Get delicious food delivered to your hostel!
            </div>
            <nav className = "navbar">
                <h1>Aroma's Delight Dhaba</h1>
                {/* <input className="search" type="text" placeholder="Search..." /> */}
                <Searchbar/>
                <a href="/Categories">Categories</a>
                <a href="/">Cart</a>
                <a href="/">{ loginStatus }</a>
            </nav>
        </div>
    );
}
 
export default Navbar;