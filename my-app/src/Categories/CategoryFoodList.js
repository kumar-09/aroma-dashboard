import ItemComponent from "../HomePage/ItemsComponent";
import './CategoryTemplate.css'
import { useEffect,useState } from "react";
import axios from 'axios'
const CategoryFoodList = ({category,addOne,subtractOne, cart}) => {
   
// category API ----------------------->>>>
let CategoryDatalist;
const [CategoryData,setCategoryData]= useState([]);
useEffect (  ()=>{
  
    axios.get('http://127.0.0.1:8000/api/menu/'+category[0].category)
    .then ( res =>{
      console.log(res.data)
      CategoryDatalist = res.data;
     
    setCategoryData(CategoryDatalist);
  })
  .catch( error => console.log('failed to fetch category data'))
},[])
      
    return ( 
        <>

        <div className="CategoryFoodList">
            <div className="CategoryTitle">
                {category[0].category}
            </div>
            <div className="categorylist-flex">
                { CategoryData.map(Food => (
                    <ItemComponent  Food={Food} key={Food.food_id} subtractOne = {subtractOne} addOne = {addOne} sf={'Fooditem-dif-design'} quantity={((cart.find((eatable => eatable.id === Food.id)))??{quantity: 0}).quantity}/>
                ))}
            </div>
        </div>
        
        </>
     );
}
 
export default CategoryFoodList;