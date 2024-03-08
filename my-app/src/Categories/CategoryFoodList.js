import ItemComponent from "../HomePage/ItemsComponent";
import './CategoryTemplate.css'
const CategoryFoodList = ({category,addOne,subtractOne, cart}) => {
   

    return ( 
        <>

        <div className="CategoryFoodList">
            <div className="CategoryTitle">
                {category[0].category}
            </div>
            <div className="categorylist-flex">
                { category.map(Food => (
                    <ItemComponent  Food={Food} key={Food.id} subtractOne = {subtractOne} addOne = {addOne} sf={'Fooditem-dif-design'} quantity={((cart.find((eatable => eatable.id === Food.id)))??{quantity: 0}).quantity}/>
                ))}
            </div>
        </div>
        
        </>
     );
}
 
export default CategoryFoodList;