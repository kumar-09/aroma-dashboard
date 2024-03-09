import {useState} from "react";

var hidden='none'
const Searchbar = (props) => {
    const [searchInput, setSearchInput] = useState("");
    var items = props.items;
    items = items.map((item)=>{return {name : item.name.toUpperCase(), category: item.category.toUpperCase()};});
    console.log(items);
    const handleChange = (e) => {
       e.preventDefault();
       setSearchInput(e.target.value)
       hidden = "block"
       console.log(hidden)
       console.log(e.target.value)
    };
    function searchList() {
       let filtereditems = items.filter((item) => {
          return item.name.match(searchInput.toUpperCase());
       });
       const filtered = filtereditems?.map((item) => (
          <tr>
             <td> {item.name}</td>
          </tr>
       ));
       if(searchInput==="") return ;
       return ( 
            <div>
                <tr>
                {/* <th> Item </th>
                <th></th>
                <th> Cost </th> */}
                </tr>
                <div> {filtered} </div>
            </div>
        );
    }
    return (
       <div className="searchbox">
          <input
             type="search"
             placeholder="Search..."
             onChange={handleChange}
             value={searchInput}
             className="search"
          />
          <table style={{ tableLayout: "fixed", width: "11rem", border:"none"}} className="searchresults" >
             
             {searchList()}
          </table>
       </div>
    );
 }

 export default Searchbar;