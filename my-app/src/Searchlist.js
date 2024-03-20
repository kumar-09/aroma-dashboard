function SearchList(props) {
   var items = props.items;
   var a = [];
   for(let i=0;i<items.length;i++){
      for(let j=0;j<items[i][1].length;j++){
         a.push({name : items[i][1][j].name.toUpperCase() , category : items[i][1][j].Type})
      }
   }
   // console.log(a);
   let filtereditems;
   try{var searchInput = props.searchInput;
    filtereditems = a.filter((item) => {
      // console.log(item);
       return item.name.match(searchInput.toUpperCase());
    });}
    catch(e){
      console.log(e);
    }
   
    // console.log(filtereditems);
    var filtered = []
    try{ filtered = filtereditems?.map((item) => (
      <dt>
          <a href = {'/Categories/CategoryFoodList-' + item.category}> {item.name}</a>
      </dt>
    ));}
    catch{}
    
    if(searchInput==="") return ;

    return ( 
         <div className = "searchresults">
             <dl> {filtered} </dl>
         </div>
     );
 }

 export default SearchList;