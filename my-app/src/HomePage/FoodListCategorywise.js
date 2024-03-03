import ItemComponent from "./ItemsComponent";

const FoodListCategorywise = ({Foodlist, subtractOne, addOne, sf}) => {
    return ( 
        <>
        <div className="Category-name">{Foodlist[0].dish.category}</div>
       { Foodlist.map( (Food) => (
      <ItemComponent Food={Food} key={Food.dish.id} subtractOne = {subtractOne} addOne = {addOne} sf={'Fooditem'}/>  
     ))}
     </>
     )
}
 
export default FoodListCategorywise;