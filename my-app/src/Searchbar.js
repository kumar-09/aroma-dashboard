import {useState} from "react";

var hidden='none'
const Searchbar = () => {
    const [searchInput, setSearchInput] = useState("");
    let items = [
       { name: "pav bhaji", cost: 60 },
       { name: "frankie", cost: 20},
       { name: "tea", cost: 10}
    ];
    const handleChange = (e) => {
       e.preventDefault();
       setSearchInput(e.target.value)
       hidden = "block"
       console.log(hidden)
       console.log(e.target.value)
    };
    function searchList() {
       let filtereditems = items.filter((item) => {
          return item.name.match(searchInput.toLowerCase());
       });
       const filtered = filtereditems?.map((item) => (
          <tr>
             <td> {item.name}</td>
             <td> {item.cost} </td>
          </tr>
       ));
       if(searchInput==="") return ;
       return ( 
            <div>
                <tr>
                <th> Item </th>
                <th></th>
                <th> Cost </th>
                </tr>
                <div> {filtered} </div>
            </div>
        );
    }
    return (
       <div className="searchbox">
          <input
             Type="search"
             placeholder="Search..."
             onChange={handleChange}
             value={searchInput}
             className="search"
          />
          <table style={{ tableLayout: "fixed", width: "11rem", border:"1px solid"}} className="searchresults" >
             
             {searchList()}
          </table>
       </div>
    );
 }

 export default Searchbar;