import { useState } from "react";
import CartDialog from "./CartDialog";
import FoodList from "./FoodList";

const Home = ( {list, addOne, subtractOne, cartItems, setList}) => {
    // const [list, setList] = useState([
    //     {dish: {id:1 ,name:'Paneer Cheese Sandwich', price: '66', image: './images/3f797cae-9813-4239-b745-9e2cdf09932c.webp'}, quantity:0},
    //     { dish: {id:2,name: 'Chicken cheese Sandwich', price: '66', image: ''} ,quantity:0},
    //     {dish: {id:3, name:'Egg Cheese Sandwich', price:'60',image:''}, quantity:0},
    //     {dish: {id:4, name:'Veg Cheese Sandwich', price:'55', image:''}, quantity:0}
    // ]);

    // const cart = list.filter((item) => item.quantity !==0);

    // const subtractOne = (id) =>{
    //     const tempList = list.map((item) => {
    //         if(item.dish.id === id){
    //             item.quantity = item.quantity - 1;
    //         }
    //         return item;
    //     });
    //     setList(tempList);
    // }

    // const addOne = (id) => {
    //     const tempCart = list.map((item) => {
    //         if(item.dish.id === id){
    //             item.quantity = item.quantity + 1;
    //         }
    //         return item;
    //     });
    //     setList(tempCart);
    // }

    const subtractOneMenu = (id) => {
        const tempList = list.map((item) => {
            if(item.dish.id === id){
                item.quantity = item.quantity - 1;
            }
            return item;
        });
        setList(tempList);
    }

    return (
        
        <div className="home">
            <FoodList foodItems = {list} subtractOne = {subtractOneMenu} addOne = {addOne}/>
            <CartDialog subtractOne={subtractOne} addOne={addOne} cartList={cartItems}/>
        </div>
    );
}
 
export default Home;