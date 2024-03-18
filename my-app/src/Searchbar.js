import {useState, Link} from "react";
import {useRef } from "react";
import FoodList from "./HomePage/FoodList";
var hidden='none'
const Searchbar = (props) => {
    const setSearchInput = props.setSearchInput;
    var items = props.items;
    items = items.map((item)=>{return {name : item.name.toUpperCase(), category: item.category};});
   //  console.log(items);
    const handleChange = (e) => {
       e.preventDefault();
       setSearchInput(e.target.value)
    };
   //  function searchList() {
   //     let filtereditems = items.filter((item) => {
   //        return item.name.match(searchInput.toUpperCase());
   //     });
   //     const filtered = filtereditems?.map((item) => (
   //        <tr>
   //           <a href = {'/Categories/CategoryFoodList-' + item.category}> {item.name}</a>
   //        </tr>
   //     ));
   //     if(searchInput==="") return ;
   //     return ( 
   //          <div>
   //              <div> {filtered} </div>
   //          </div>
   //      );
   //  }

    const myref = useRef(null);
    function scrollToCategory(CategoryId) {
        if(myref.current) myref.current.scrollToCategory(CategoryId); 
    }
    return (
       <div className="searchbox">
          <input
             type="search"
             placeholder="Search..."
             onChange={handleChange}
             className="search"
          />
          {/* <table style={{ tableLayout: "fixed", width: "11rem", border:"none"}} className="searchresults" >
             
             {searchList()}
          </table> */}
       </div>
    );
 }

 export default Searchbar;