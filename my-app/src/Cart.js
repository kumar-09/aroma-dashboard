import { useState } from "react";
import CartItem from "./cartItem";

// cart array has objects of the form {dish, quantity}

function Cart(){
    const [cart, setCart] = useState([]);

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
                {
                    cart.map(
                        (item) => 
                        <CartItem foodItem = {item.dish} add = {addOne} subtract = {subtractOne} number = {item.quantity}/>
                    )
                    
                }
            </div>
        )
    }
}

export default Cart;