import CartItem from "./cartItem";
import './Homepage.css'
// cart array has objects of the form {dish, quantity}

function CartDialog({subtractOne, addOne, cartList, menu}){
    
    const cart = cartList;

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
                    {
                        cart.length === 1 && cart[0].quantity === 1? " Item" : " Items"
                    }
                </h3>
                {
                    cart.map(
                        (item) => 
                        <CartItem foodItem = {menu.find((dish) => {return dish.id === item.id})} add = {addOne} subtract = {subtractOne} number = {item.quantity} key={item.id} showImg={false}/>
                    )
                    
                }
                <h3 className="total">
                    Total: &#8377;{   
                        cart.reduce((sum, item) => {
                            let dish = menu.find((eatable) => {return eatable.id === item.id});
                            return sum + item.quantity * dish.price}, 0
                        )
                    }
                </h3>
            </div>
        )
    }
}

export default CartDialog;