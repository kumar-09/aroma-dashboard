import CartItem from "./HomePage/cartItem";


function Cart({ cartItems, addOne, subtractOne }) {
    return (
        <div className="Cart-page">
            <h1 className="cart-heading">Cart</h1>
            {cartItems.map((item) => <CartItem key={item.dish.id} foodItem={item.dish} add={addOne} subtract={subtractOne} showImg={true} number={item.quantity} />)}

            <h3 className="total">
                Total: &#8377;{
                    cartItems.reduce((sum, item) => sum + item.quantity * item.dish.price, 0)
                }
            </h3>
        </div>
    )
}

export default Cart;