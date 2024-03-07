import { useState,useRef } from "react";
import CartDialog from "./CartDialog";
import FoodList from "./FoodList";
import CategoryList from "./CategoryList";
import './Homepage.css'

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
    const categories =[];
    const Sandwich= list.filter((Food) => Food.dish.category === 'Sandwich');
    const ColdDrinks = list.filter((Food)=> Food.dish.category ==='Cold Drinks')
    categories.push(Sandwich,ColdDrinks);

    const GotoCategory = (category) => {
            console.log(category);
            
    }

    const subtractOneMenu = (id) => {
        const tempList = list.map((item) => {
            if(item.dish.id === id){
                item.quantity = item.quantity - 1;
            }
            return item;
        });
        setList(tempList);
    }
    const CategoryName = [ 'Sandwich', 'Cold Drinks', 'Noodles', 'Rices', 'Parathas'];

    // connecting FoodList and Categorylist---------------------->>>
    
    const myref = useRef(null);
    function scrollToCategory(CategoryId) {
        if(myref.current) myref.current.scrollToCategory(CategoryId); 
    }
    //------------------------------<<<
    return (
        
        <div className="home">
            <CategoryList categories = {CategoryName} GotoCategory={GotoCategory} scrollToCategory={scrollToCategory} />
            <FoodList ref={myref} foodItems = {categories} subtractOne = {subtractOneMenu} addOne = {addOne} />
            <CartDialog subtractOne={subtractOne} addOne={addOne} cartList={cartItems}/>
        </div>
    );
}
 
export default Home;