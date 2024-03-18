function SearchList(props) {
   var items = props.items;
   items = items.map((item)=>{return {name : item.name.toUpperCase(), category: item.category};});
   var searchInput = props.searchInput;
    let filtereditems = items.filter((item) => {
       return item.name.match(searchInput.toUpperCase());
    });
    const filtered = filtereditems?.map((item) => (
       <tr>
          <a href = {'/Categories/CategoryFoodList-' + item.category}> {item.name}</a>
       </tr>
    ));
    if(searchInput==="") return ;
    return ( 
         <div className = "searchresults">
             <div> {filtered} </div>
         </div>
     );
 }

 export default SearchList;