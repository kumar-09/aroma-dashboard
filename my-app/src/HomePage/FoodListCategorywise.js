import ItemComponent from "./ItemsComponent";
import './Homepage.css'
const FoodListCategorywise = ({Foodlist, subtractOne, addOne, sf}) => {
  console.log(Foodlist[0].dish)
    return ( 
        <div id={Foodlist[0].dish.category+'list'}>
      {  console.log(Foodlist)}
        <div className="Category-name" id={Foodlist[0].dish.category} ><p>{Foodlist[0].dish.category}</p> <span> {Foodlist.length}</span></div>
       { Foodlist.map( (Food) => (
      <ItemComponent Food={Food} key={Food.dish.id} subtractOne = {subtractOne} addOne = {addOne} sf={'Fooditem'}/>  
     ))}
     </div>
     )
}
 
export default FoodListCategorywise;