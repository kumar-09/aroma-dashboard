
import FoodListCategorywise from "./FoodListCategorywise";
import ItemComponent from "./ItemsComponent";
import { Children, forwardRef,useEffect,useImperativeHandle, useRef } from "react";

const FoodList = forwardRef(({foodItems, subtractOne, addOne, cart},ref) => {

    const categories = foodItems;
    // for scrolling to clicked category--->>>

    const scrollToCategory = (CategoryId)=> {
        const CategoryFoodListId = CategoryId+'list'
        const category = document.getElementById(CategoryFoodListId);
        // console.log(CategoryId);
        // console.log(category);
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
                if(classList_string.includes('activebtn-categorylist')) child.classList.remove('activebtn-categorylist')
                })
            document.getElementById(id).classList.add('activebtn-categorylist');
        }
    
    useImperativeHandle(ref,() => ({
        scrollToCategory,
    }));

    console.log(categories);

    // implementation of back-scrolling ----->>>

   
        window.addEventListener('scroll',()=>{
            categories.map( category => {
            let title = category[0].dish.category;
            // console.log(document.getElementById(title));
            let titleElement = document.getElementById(title);
            let titleBtnId = title+'btn';
            let titleBtn = document.getElementById(titleBtnId);
            // console.log(titleElement);
            if(titleElement){
            let heightOfTitleFromTop = titleElement.getBoundingClientRect().top;
            // console.log( 'height of ',title,': ',heightOfTitleFromTop)
            let heightOfHeader = document.getElementById('head').getBoundingClientRect().bottom;
            if( heightOfTitleFromTop <= heightOfHeader) {
                // console.log(title,'  stick')
                    titleElement.classList.add('Category-name-active');
                    titleBtn.classList.add('activebtn-categorylist');
                   
            }
            else {
                if(titleElement.classList.value.includes('Category-name-active') )
                    titleElement.classList.remove('Category-name-active');
                
        }
            if( heightOfTitleFromTop === heightOfHeader)  titleBtn.classList.add('activebtn-categorylist');
            else {
                if(titleBtn.classList.value.includes('activebtn-categorylist')) titleBtn.classList.remove('activebtn-categorylist');
            }
    }} )

        });
        
    
       
   //----------------------<<<


    return ( 
        <div className="Menu">
            {
            // <ItemComponent FoodList={FoodList}/>
            categories.map( (category) =>(
                    <FoodListCategorywise  Foodlist={category} key={categories.indexOf(category)} subtractOne = {subtractOne} addOne = {addOne} sf={'Fooditem'}  cart = {cart}/>       
            ))}
             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
     );
            
})
export default FoodList;
