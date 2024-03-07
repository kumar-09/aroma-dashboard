
import FoodListCategorywise from "./FoodListCategorywise";
import ItemComponent from "./ItemsComponent";
import { forwardRef,useImperativeHandle, useRef } from "react";

const FoodList = forwardRef(({foodItems, subtractOne, addOne},ref) => {

    const categories = foodItems;
    // for scrolling to clicked category--->>>

    const scrollToCategory = (CategoryId)=> {
        const category = document.getElementById(CategoryId);
        console.log('category:',CategoryId,'is selected.');
        console.log(category);
        if(category) {
           const height=category.getBoundingClientRect().top;
           document.documentElement.scrollBy({
            top: height-128.4,
            left: 0,
            behavior: 'smooth'
           });
            }
            
        }
    
    useImperativeHandle(ref,() => ({
        scrollToCategory,
    }));
   //----------------------<<<


    return ( 
        <div className="Menu">
            {
            // <ItemComponent FoodList={FoodList}/>
            categories.map( (category) =>(
                    <FoodListCategorywise  Foodlist={category} key={categories.indexOf(category)} subtractOne = {subtractOne} addOne = {addOne} sf={'Fooditem'}  />       
            ))}
             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
     );
});
 
export default FoodList;
