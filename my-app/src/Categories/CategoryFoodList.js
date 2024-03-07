import ItemComponent from "../HomePage/ItemsComponent";
import './CategoryTemplate.css'
const CategoryFoodList = ({category,addOne,subtractOne}) => {
   

    return ( 
        <>

        <div className="CategoryFoodList">
            <div className="CategoryTitle">
                {category[0].dish.category}
            </div>
            <div className="categorylist-flex">
                { category.map(Food => (
                    <ItemComponent  Food={Food} key={Food.dish.id} subtractOne = {subtractOne} addOne = {addOne} sf={'Fooditem-dif-design'}/>
                ))}
            </div>
        </div>
        
        </>
     );
}
 
export default CategoryFoodList;