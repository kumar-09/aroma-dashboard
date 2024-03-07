
import FoodListCategorywise from "./FoodListCategorywise";
import ItemComponent from "./ItemsComponent";
import { Children, forwardRef,useImperativeHandle, useRef } from "react";

const FoodList = forwardRef(({foodItems, subtractOne, addOne},ref) => {

    const categories = foodItems;
    // for scrolling to clicked category--->>>

    const scrollToCategory = (CategoryId)=> {
        const category = document.getElementById(CategoryId);
        console.log('category:',CategoryId,'is selected.');
        console.log(category);
        if(category) {
           const height=category.getBoundingClientRect().top;
           const navbar_height = document.getElementById('head').getBoundingClientRect().bottom;
           document.documentElement.scrollBy({
            top: height-navbar_height,
            left: 0,
            behavior: 'smooth'
           });
            }
            const id= CategoryId+'btn';
            document.getElementsByClassName('CategoryList')[0].childNodes.forEach( (child)=>{
                let classList_string = child.classList.value;
                console.log(classList_string) ;
                console.log()
                if(classList_string.includes('activebtn-categorylist')) child.classList.remove('activebtn-categorylist')
                })
            document.getElementById(id).classList.add('activebtn-categorylist');
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
