
import FoodListCategorywise from "./FoodListCategorywise";
import ItemComponent from "./ItemsComponent";

const FoodList = ({foodItems, subtractOne, addOne}) => {
    const categories = foodItems;
   
    return ( 
        <div className="Menu">
            {
            // <ItemComponent FoodList={FoodList}/>
            categories.map( (category) =>(
                    <FoodListCategorywise Foodlist={category} key={categories.indexOf(category)} subtractOne = {subtractOne} addOne = {addOne} sf={'Fooditem'}  />       
            ))}

        </div>
     );
}
 
export default FoodList;
