import { Link,useNavigate } from "react-router-dom";
import CartItem from "./HomePage/cartItem";
import Suggestions from "./Suggestions";
import { useEffect, useState, useRef} from "react";
import PrevOrders from "./PrevOrders";
import img from './image/empty-cart-7359557-6024626.png';
import axios from "axios";

function Cart({ cart, addOne, subtractOne, foodList,loggedIn,userId}) {
const navigate = useNavigate();
const [cartadded, setcartadded] = useState(false);
    const AddCart = useRef({
        userid : '',
        cart_id: '',
        food_ids : [],
        quantity: [],
    });
    function handleCheckout(cart){
        let d = new Date();
        let fulldate = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear()+'-'+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
        let ids=[],quantities=[];
        cart.map(item => {
            ids.push(item.food_id);
            quantities.push(item.quantity);
        })
        console.log(ids,quantities,fulldate,userId)
         let newcart={
            userid: userId,
            cart_id: fulldate,
            food_ids: ids,
            quantity: quantities
        }
        AddCart.current =newcart;
        return AddCart.current
    }

    const addcart= (data)=>{
        axios.post('http://127.0.0.1:8000/api/addCart/', data)
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
            { cart.length !=0 && <div className="cart-heading">Cart</div>}
            <div className="cart-flex">
            <div className="cart-list" style={{width: cart.length===0 && '100%', justifyContent: cart.length===0 && 'center' }}>
            {cart.map((item) => <CartItem key={item.Food_id} foodItem={foodList.find((dish) => {return dish.food_id === item.food_id})} add={addOne} subtract={subtractOne} showImg={true} number={item.quantity} cost={'cost-dif'} fooditem={'fooditem-dif'} />)}
            {cart.length === 0 && 
                <div className="emptyCart" >
                    Your cart is empty :(
                    <br/>
                    <img src={img} style={{width: 300}}></img>
                    <Link to="/"><button className="go-to-cart-btn" style={{backgroundColor: '#ff5050'}}>Back to Homepage</button></Link>
                    </div>}
            </div>
        
                <div className="total-cart-page" style={{display: cart.length !==0 ? "inline-block" : "none"}}>

                    ORDER SUMMARY <br></br><br></br>
               
                {    
                    cart.length !== 0 && <>
                        <div className="total-items">
                            {cart.reduce((sum, item) => sum + item.quantity, 0)}  
                            {cart.length === 1  && cart[0].quantity === 1 ? " Item" : " Items"}
                        </div>
                        
                        <div className="item-total">Item Total: &#8377;{   
                        cart.reduce((sum, item) => {
                            let dish = foodList.find((eatable) => {return eatable.id === item.id});
                            return sum + item.quantity * dish.price}, 0
                        )
                        }
                        </div>
                        <div className="delivery-charges">
                            Delivery charge : &#8377; 30
                        </div>
                        <div className="grandTotal">
                            Grand Total: &#8377;
                        {cart.reduce((sum, item) => {
                            let dish = foodList.find((eatable) => {return eatable.id === item.id});
                            return sum + item.quantity * dish.price}, 30
                        )}
                        </div>
                        
                        <div className="cart-checkout-btn">
                 {loggedIn ? <button className="go-to-cart-btn" style={{marginLeft: 0}} onClick={()=>{ addcart(handleCheckout(cart))}}>Proceed to Checkout</button>
                    :<Link to='/login'> <button className="go-to-cart-btn" style={{textDecoration:'none', marginLeft: 0}}> Proceed to Checkout</button> </Link>}  
                    </div>
                    </>
                }
               
            </div>
         
            </div>
            {/* {cart.length !=0 &&  <Suggestions addOne={addOne} subtractOne={subtractOne} cart = {cart}/>} */}
            {  cart.length!==0 && <div className="checkout">
            { loggedIn ? <button className="checkout-btn" style={{marginLeft: 0}} onClick={()=>{addcart(handleCheckout(cart))}}>Proceed to Checkout</button>
                    :<Link to='/login'> <button className="checkout-btn" style={{textDecoration:'none', marginLeft: 0}}> Proceed to Checkout</button> </Link>}                      
            </div>}

                {loggedIn && <PrevOrders userID={userId} addOne={addOne} subtractOne={subtractOne} foodList = {foodList} cart={cart}/>}
                
               
        </div>
            
              )
            
}

export default Cart;