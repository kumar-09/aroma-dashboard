
import ItemComponent from "./ItemsComponent";

const FoodList = ({foodItems, subtractOne, addOne}) => {
    const Menu = foodItems;
    return ( 
        <div className="Menu">
            {
            // <ItemComponent FoodList={FoodList}/>
            Menu.map( (Food) =>(
                    <ItemComponent Food={Food} key={Food.dish.id} subtractOne = {subtractOne} addOne = {addOne} sf={'Fooditem'}/>        
            ))}

        </div>
     );
}
 
export default FoodList;
