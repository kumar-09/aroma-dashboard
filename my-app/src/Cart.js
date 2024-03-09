import { Link } from "react-router-dom";
import CartItem from "./HomePage/cartItem";
import Suggestions from "./Suggestions";
import { useEffect, useState } from "react";
import PrevOrders from "./PrevOrders";


function Cart({ cartItems, addOne, subtractOne, foodList}) {
    return (
        <div className="Cart-page">
            <h1 className="cart-heading">Cart</h1>
            {cartItems.map((item) => <CartItem key={item.id} foodItem={foodList.find((dish) => {return dish.id === item.id})} add={addOne} subtract={subtractOne} showImg={true} number={item.quantity} />)}

            <h3 className="total">
                {cartItems.length === 0 && 
                <>
                    Your cart is empty :(
                    <br/>
                    <Link to="/"><button className="lure">Back to Homepage</button></Link>
                </>
                }
                
                {   
                    cartItems.length !== 0 && <>
                        <h4>
                            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}  
                            {cartItems.length === 1  && cartItems[0].quantity === 1 ? " Item" : " Items"}
                        </h4>
                        
                        Total: &#8377;{   
                        cartItems.reduce((sum, item) => {
                            let dish = foodList.find((eatable) => {return eatable.id === item.id});
                            return sum + item.quantity * dish.price}, 0
                        )
                        }
                    <br/>
                    <button className="checkout">Proceed to Checkout</button>
                    
                    </>
                }
                {cartItems.length === 0 && <Suggestions addOne={addOne} subtractOne={subtractOne} cart = {cartItems}/>}
                {true && <PrevOrders userID={'Aminesh@1210'} addOne={addOne} subtractOne={subtractOne}/>}
            </h3>
        </div>
    )
}

export default Cart;