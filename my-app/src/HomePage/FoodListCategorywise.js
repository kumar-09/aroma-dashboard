import ItemComponent from "./ItemsComponent";
import './Homepage.css'
const FoodListCategorywise = ({Foodlist, subtractOne, addOne, sf}) => {
 
    return ( 
        <div id={Foodlist[0].dish.category+'list'}>
      
        <div className="Category-name" id={Foodlist[0].dish.category} ><p>{Foodlist[0].dish.category}</p> <span> {Foodlist.length}</span></div>
       { Foodlist.map( (Food) => (
      <ItemComponent Food={Food} key={Food.dish.id} subtractOne = {subtractOne} addOne = {addOne} sf={sf}/>  
     ))}
     </div>
     )
}
 
export default FoodListCategorywise;