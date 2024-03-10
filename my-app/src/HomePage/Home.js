import {useRef } from "react";
import CartDialog from "./CartDialog";
import FoodList from "./FoodList";
import CategoryList from "./CategoryList";
import './Homepage.css'

const Home = ( {list, addOne, subtractOne, cartItems, menu,HeaderRef}) => {
    const categories = list;

    /*const subtractOneMenu = (id) => {
        const tempList = list.map((item) => {
            if(item.dish.id === id){
                item.quantity = item.quantity - 1;
            }
            return item;
        });
        setList(tempList);
    }*/
    const CategoryName = [ 'Sandwich', 'Cold Drinks', 'Noodles', 'Rices', 'Parathas'];

    // connecting FoodList and Categorylist---------------------->>>
    
    const myref = useRef(null);
    function scrollToCategory(CategoryId) {
        if(myref.current) myref.current.scrollToCategory(CategoryId); 
    }
    //------------------------------<<<
    return (
        
        <div className="home">
            <CategoryList categories = {CategoryName}  scrollToCategory={scrollToCategory} />
            <FoodList HeaderRef={HeaderRef} ref={myref} foodItems = {categories} subtractOne = {subtractOne} addOne = {addOne} menu = {menu} cart = {cartItems}/>
            <CartDialog subtractOne={subtractOne} addOne={addOne} cartList={cartItems} menu = {menu}/>
        </div>
    );
}
 
export default Home;