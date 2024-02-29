import { Link } from "react-router-dom";
import CartItem from "./HomePage/cartItem";


function Cart({ cartItems, addOne, subtractOne }) {
    return (
        <div className="Cart-page">
            <h1 className="cart-heading">Cart</h1>
            {cartItems.map((item) => <CartItem key={item.dish.id} foodItem={item.dish} add={addOne} subtract={subtractOne} showImg={true} number={item.quantity} />)}

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
                        cartItems.reduce((sum, item) => sum + item.quantity * item.dish.price, 0)
                    }
                    <br/>
                    <button className="checkout">Proceed to Checkout</button>
                    </>
                }
            </h3>
        </div>
    )
}

export default Cart;