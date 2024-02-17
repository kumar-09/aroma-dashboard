import CartItem from "./HomePage/cartItem";


function Cart({cartItems, addOne, subtractOne}){
    return(
        <div className="Cart-page">
            <h1 className="cart-heading">Cart</h1>
            {cartItems.map((item) => <CartItem key={item.dish.id} foodItem={item.dish} add={addOne} subtract={subtractOne} showImg={true} number={item.quantity}/>)}
        </div>
    )
}

export default Cart;