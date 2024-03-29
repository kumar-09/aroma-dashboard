import CartItem from "./cartItem";
import './Homepage.css'
import img from '../image/empty-cart-7359557-6024626.png'
import { Link } from 'react-router-dom'
// cart array has objects of the form {dish, quantity}

function CartDialog({ subtractOne, addOne, cart, menu }) {
    if (cart.length === 0) {

        return (
            <div className="cart" id="cart" >
                <div className="cartHeading">Cart</div>
                <div className="emptyCart">Your cart is empty.</div>
                <div style={{ textAlign: "center" }}><img src={img} style={{ width: '200px' }}></img></div>
            </div>
        )
    }
    else {
        return (
            <div className="cart" id="cart" >
                <div className="cartHeading">Cart</div>
                <div className="num-of-items">
                    {
                        cart.reduce((sum, item) => sum + item.quantity, 0)
                    }
                    {
                        cart.length === 1 && cart[0].quantity === 1 ? " Item" : " Items"
                    }
                </div>
                {
                    cart.map(
                        (item) =>
                            <CartItem foodItem={menu.find((dish) => { return dish.food_id === item.food_id })} add={addOne} subtract={subtractOne} number={item.quantity} key={item.food_id} cost={'cost'} showImg={false} fooditem={'food-item'} />
                    )

                }
                <div className="total">
                    Total: &#8377; {
                        cart.reduce((sum, item) => {
                            let dish = menu.find((eatable) => { return eatable.food_id === item.food_id });
                            return sum + item.quantity * dish.price;
                        }, 0
                        )
                    }
                </div>
                <div className="go-to-cart">
                    <Link to='./Cart'>  <button className="go-to-cart-btn"> Go to cart</button></Link>
                </div>
            </div>
        )
    }
}

export default CartDialog;