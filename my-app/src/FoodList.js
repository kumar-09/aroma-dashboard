
import { useState } from "react";
import ItemComponent from "./ItemsComponent";

const FoodList = () => {

    const [FoodList, setFoodList] = useState([
        {id:1 ,name:'Paneer Cheese Sandwich', price: '66', image: './images/3f797cae-9813-4239-b745-9e2cdf09932c.webp', quantity:0},
        { id:2,name: 'Chicken cheese Sandwich', price: '66', image: '' ,quantity:0},
        {id:3, name:'Egg Cheese Sandwich', price:'60',image:'', quantity:0},
        {id:4, name:'Veg Cheese Sandwich', price:'55', image:'', quantity:0}
    ]);

    return ( 
        <div className="FoodList">
            {
            // <ItemComponent FoodList={FoodList}/>
            FoodList.map( (Food) =>(
                    <ItemComponent Food={Food} key={Food.id} />
                    
            ))}

        </div>
     );
}
 
export default FoodList;
