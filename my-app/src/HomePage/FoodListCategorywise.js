import ItemComponent from "./ItemsComponent";

const FoodListCategorywise = ({Foodlist, subtractOne, addOne, sf}) => {
    return ( 
        <>
      {  console.log(Foodlist)}
        <div className="Category-name" id={Foodlist[0].dish.category} ><p>{Foodlist[0].dish.category}</p> <span> {Foodlist.length}</span></div>
       { Foodlist.map( (Food) => (
      <ItemComponent Food={Food} key={Food.dish.id} subtractOne = {subtractOne} addOne = {addOne} sf={'Fooditem'}/>  
     ))}
     </>
     )
}
 
export default FoodListCategorywise;