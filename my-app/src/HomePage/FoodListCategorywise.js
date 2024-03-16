import ItemComponent from "./ItemsComponent";
import './Homepage.css'
const FoodListCategorywise = ({Foodlist, subtractOne, addOne, MainClass, cart,ImgClass,ItemInfo,ItemPriceInfo,AddBtn,ItemName}) => {

  return ( 
        <div id={Foodlist[0]+'list'}>
        <div className="Category-name" id={Foodlist[0]} ><p>{Foodlist[0]}</p> <span> {Foodlist[1].length}</span></div>
       { Foodlist[1].map( (Food) => (
          
        <ItemComponent Food={Food} key={Food.id} subtractOne = {subtractOne} addOne = {addOne} ItemInfo={ItemInfo} ItemPriceInfo={ItemPriceInfo} AddBtn={AddBtn} ItemName={ItemName} ImgClass={ImgClass} MainClass={MainClass} quantity={((cart.find((eatable => eatable.id === Food.id)))??{quantity: 0}).quantity}/>  
     ))}
     </div>
     )
}
 
export default FoodListCategorywise;