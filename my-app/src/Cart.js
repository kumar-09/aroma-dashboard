import { Link,useNavigate } from "react-router-dom";
import CartItem from "./HomePage/cartItem";
import Suggestions from "./Suggestions";
import { useEffect, useState, } from "react";
import PrevOrders from "./PrevOrders";
import img from './image/empty-cart-7359557-6024626.png';
import axios from "axios";

function Cart({ cartItems, addOne, subtractOne, foodList,loggedIn,userId}) {
const navigate = useNavigate();
const [cartadded, setcartadded] = useState(false);
    const [AddCart, setAddCart] = useState({
        userid : '',
        cart_id: '',
        food_ids : [],
        quantity: [],
    });

 function handleCheckout(cartItems){
    // ‘userid’ : ‘x’, ‘cart_id’ : ‘y’, ‘food_ids’ : [’i1’, ‘i2’, ‘i3’] , ‘quantity’ : [1,1,2]
    let d = new Date();
    let fulldate = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear()+'-'+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    let ids=[],quantities=[];
    cartItems.map(item => {
        ids.push(item.food_id);
        quantities.push(item.quantity);
    })
    console.log(ids,quantities)
    setAddCart({
        userid: userId,
        cart_id: fulldate,
        food_ids: ids,
        quantity: quantities
    })
    console.log(AddCart)
    axios.post('http://127.0.0.1:8000/api/addCart/',AddCart)
    .then (res=>{
        console.log(res);
    })
    .catch( err=>{
        console.log('failed to add cart');
        setcartadded(false);
    })
    .finally(()=>{
        setcartadded(true);
        navigate('/')
    })

    }





    return (
        
        
       <div className="Cart-page">
            { cartItems.length !=0 && <div className="cart-heading">Cart</div>}
            <div className="cart-flex">
            <div className="cart-list">
            {cartItems.map((item) => <CartItem key={item.Food_id} foodItem={foodList.find((dish) => {return dish.food_id === item.food_id})} add={addOne} subtract={subtractOne} showImg={true} number={item.quantity} cost={'cost-dif'} fooditem={'fooditem-dif'} />)}
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

                 {loggedIn ? <button className="go-to-cart-btn" onClick={()=>{handleCheckout(cartItems)}}>Proceed to Checkout</button>
                    :<Link to='/login'> <button className="go-to-cart-btn" style={{textDecoration:'none'}}> Proceed to Checkout</button> </Link>}  
                    
                    </>
                }
               
            </div>
            
            </div>
            {cartItems.length !=0 &&  <Suggestions addOne={addOne} subtractOne={subtractOne} cart = {cartItems}/>}
                {loggedIn && <PrevOrders userID={'23b0608'} addOne={addOne} subtractOne={subtractOne} foodList = {foodList} cart={cartItems}/>}
        </div>
              )
            
}

export default Cart;