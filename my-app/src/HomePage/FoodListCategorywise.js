import ItemComponent from "./ItemsComponent";
import './Homepage.css'
const FoodListCategorywise = ({Foodlist, subtractOne, addOne, sf, cart}) => {
  //console.log(Foodlist[0])
    return ( 
        <div id={Foodlist[0].category+'list'}>
      {  /*console.log(Foodlist)*/}
        <div className="Category-name" id={Foodlist[0].category} ><p>{Foodlist[0].category}</p> <span> {Foodlist.length}</span></div>
       { Foodlist.map( (Food) => (
          
        <ItemComponent Food={Food} key={Food.id} subtractOne = {subtractOne} addOne = {addOne} sf={sf} quantity={((cart.find((eatable => eatable.id === Food.id)))??{quantity: 0}).quantity}/>  
     ))}
     </div>
     )
}
 
export default FoodListCategorywise;