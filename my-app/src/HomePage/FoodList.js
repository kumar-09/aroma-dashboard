
import FoodListCategorywise from "./FoodListCategorywise";
import ItemComponent from "./ItemsComponent";

const FoodList = ({foodItems, subtractOne, addOne}) => {
    const Menu = foodItems;
    const categories =[];
    const Sandwich= Menu.filter((Food) => Food.dish.category === 'Sandwich');
    const ColdDrinks = Menu.filter((Food)=> Food.dish.category ==='Cold drinks')
    categories.push(Sandwich,ColdDrinks);
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
