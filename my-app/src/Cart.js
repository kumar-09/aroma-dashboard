import { useState } from "react";
import CartItem from "./cartItem";

// cart array has objects of the form {dish, quantity}

function Cart(){
    const [cart, setCart] = useState([
        {dish: { name: "pav bhaji", cost: 60, id: 1 }, quantity: 3},
        {dish: { name: "frankie", cost: 20, id: 2},quantity: 2},
        {dish: { name: "tea", cost: 10, id: 3}, quantity: 4}]
    );

    const subtractOne = (id) =>{
        const tempCart = cart.map((item) => {
            if(item.dish.id === id){
                item.quantity = item.quantity - 1;
            }
            return item;
        });
        const newCart = tempCart.filter((item) => item.quantity !== 0);
        setCart(newCart);
    }

    const addOne = (id) => {
        const tempCart = cart.map((item) => {
            if(item.dish.id === id){
                item.quantity = item.quantity + 1;
            }
            return item;
        });
        setCart(tempCart);
    }

    if(cart.length === 0){
        return (
            <div className="cart">
                <h2 className="cartHeading">Cart</h2>
                <h3 className="emptyCart">Your cart is empty.</h3>
            </div>
        )
    }
    else{
        return (
            <div className="cart">
                <h2 className="cartHeading">Cart</h2>
                <h3 className="num-of-items">
                    {   
                        cart.reduce((sum, item) => sum + item.quantity, 0)
                    }
                </h3>
                <span className="num-of-items"></span>
                {
                    cart.map(
                        (item) => 
                        <CartItem foodItem = {item.dish} add = {addOne} subtract = {subtractOne} number = {item.quantity}/>
                    )
                    
                }
                <h3 className="total">
                    Total: &#8377;{   
                        cart.reduce((sum, item) => sum + item.quantity * item.dish.cost, 0)
                    }
                </h3>
            </div>
        )
    }
}

export default Cart;