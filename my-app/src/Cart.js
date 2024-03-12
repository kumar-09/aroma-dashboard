import { Link } from "react-router-dom";
import CartItem from "./HomePage/cartItem";
import Suggestions from "./Suggestions";
import { useEffect, useState } from "react";
import PrevOrders from "./PrevOrders";
import img from './image/empty-cart-7359557-6024626.png';


function Cart({ cartItems, addOne, subtractOne, foodList}) {
    return (
        <div className="Cart-page">
            { cartItems.length !=0 && <div className="cart-heading">Cart</div>}
            <div className="cart-flex">
            <div className="cart-list">
            {cartItems.map((item) => <CartItem key={item.id} foodItem={foodList.find((dish) => {return dish.id === item.id})} add={addOne} subtract={subtractOne} showImg={true} number={item.quantity} cost={'cost-dif'} fooditem={'fooditem-dif'} />)}
            {cartItems.length === 0 && 
                <div className="emptyCart" style={{marginLeft: '55%',padding: 0,marginTop: 50}}>
                    Your cart is empty :(
                    <br/>
                    <img src={img} style={{width: 300}}></img>
                    <Link to="/"><button className="go-to-cart-btn" style={{backgroundColor: '#ff5050'}}>Back to Homepage</button></Link>
                    </div>}
            </div>
        
            <div className="total">

                    
                
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
                    <button className="go-to-cart-btn">Proceed to Checkout</button>
                    
                    </>
                }
               
            </div>
            
            </div>
            {cartItems.length !=0 &&  <Suggestions addOne={addOne} subtractOne={subtractOne} cart = {cartItems}/>}
                {true && <PrevOrders userID={'23b0608'} addOne={addOne} subtractOne={subtractOne} foodList = {foodList} cart={cartItems}/>}
        </div>
    )
}

export default Cart;