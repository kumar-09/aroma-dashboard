
import FoodListCategorywise from "./FoodListCategorywise";
import ItemComponent from "./ItemsComponent";
import { forwardRef,useImperativeHandle, useRef } from "react";

const FoodList = forwardRef(({foodItems, subtractOne, addOne},ref) => {

    const categories = foodItems;
    const scrollToCategory = (CategoryId)=> {
        const category = document.getElementById(CategoryId);
        console.log('category:',CategoryId,'is selected.');
        console.log(category);
        if(category) {
            category.scrollIntoView({
                top:200,
                left:0,
                behavior: 'smooth',
            })
        }
    }
    useImperativeHandle(ref,() => ({
        scrollToCategory,
    }));

    const myref2 = useRef(null);

    return ( 
        <div className="Menu">
            {
            // <ItemComponent FoodList={FoodList}/>
            categories.map( (category) =>(
                    <FoodListCategorywise myRef={myref2} Foodlist={category} key={categories.indexOf(category)} subtractOne = {subtractOne} addOne = {addOne} sf={'Fooditem'}  />       
            ))}
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
     );
});
 
export default FoodList;
