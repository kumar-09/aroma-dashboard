import { Link } from "react-router-dom";
import CartItem from "./HomePage/cartItem";
import Suggestions from "./Suggestions";
import { useEffect, useState } from "react";
import PrevOrders from "./PrevOrders";


function Cart({ cartItems, addOne, subtractOne, foodList}) {
    return (
        <div className="Cart-page">
            <div className="cart-heading">Cart</div>
            <div className="cart-flex">
            <div className="cart-list">
            {cartItems.map((item) => <CartItem key={item.id} foodItem={foodList.find((dish) => {return dish.id === item.id})} add={addOne} subtract={subtractOne} showImg={true} number={item.quantity} cost={'cost-dif'} fooditem={'fooditem-dif'} />)}
            </div>
            <div className="total">
                {cartItems.length === 0 && 
                <>
                    Your cart is empty :(
                    <br/>
                    <Link to="/"><button className="lure">Back to Homepage</button></Link>
                </>
                }
                
                {   
                    cartItems.length !== 0 && <>
                        <div>
                            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}  
                            {cartItems.length === 1  && cartItems[0].quantity === 1 ? " Item" : " Items"}
                        </div>
                        
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
               
            </div>
            
            </div>
            <Suggestions addOne={addOne} subtractOne={subtractOne} cart = {cartItems}/>
                {true && <PrevOrders userID={'23b0608'} addOne={addOne} subtractOne={subtractOne} foodList = {foodList} cart={cartItems}/>}
        </div>
    )
}

export default Cart;