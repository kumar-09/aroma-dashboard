import { Link,useNavigate } from "react-router-dom";
import CartItem from "./HomePage/cartItem";
import Suggestions from "./Suggestions";
import { useEffect, useState, useRef} from "react";
import PrevOrders from "./PrevOrders";
import img from './image/empty-cart-7359557-6024626.png';
import axios from "axios";

function Cart({ cart, addOne, subtractOne, foodList,loggedIn,userId,name, setcarttologin}) {
const navigate = useNavigate();
const [isCheckout, setisCheckout] = useState(false);
const [cartadded, setcartadded] = useState(false);
    const AddCart= useRef({
        userid : '',
        name: '',
        cart_id: '',
        mobile: 0,
        address: '',
        food_ids : [],
        quantity: [],
    });



    const addcart= (e)=>{
        // console.log('order processing')
        e.preventDefault();
        function handleorder(cart){
            // console.log(AddCart)
            let d = new Date();
            let name = document.getElementsByName('name')[0].value;
            let address = document.getElementsByName('address')[0].value;
            let mobile_no = document.getElementsByName('mobile')[0].value;
            let fulldate = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear()+'-'+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
            let ids=[],quantities=[];
            cart.map(item => {
                ids.push(item.food_id);
                quantities.push(item.quantity);
            })
            // console.log(ids,quantities,fulldate,userId,name,address,mobile_no)
             let newcart={
                userid: userId,
                cart_id: fulldate,
                food_ids: ids,
                quantity: quantities,
                name: name,
                mobile: mobile_no,
                address: address
            }
            AddCart.current = newcart;
        }
        
        handleorder(cart);
        // console.log(AddCart.current);
        
        axios({method:'POST', url: 'http://127.0.0.1:8000/api/addCart/', data: AddCart.current})
        .then (res=>{
            // console.log(res.config.data);
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
        
    function handlechange(e){
        const{name,value} = e.target;
       
        }
        // console.log(AddCart)
    
        

 





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
                    
                
               { !isCheckout && <div className="total-cart-page" style={{display: cart.length !==0 ? "inline-block" : "none"}}>

                    ORDER SUMMARY <br></br><br></br>
               
                {    
                    cart.length !== 0 && <>
                        <div className="total-items">
                            {cart.reduce((sum, item) => sum + item.quantity, 0)}  
                            {cart.length === 1  && cart[0].quantity === 1 ? " Item" : " Items"}
                        </div>
                        
                        <div className="item-total">Item Total: &#8377;
                        {cart.reduce((sum, item) => {
                            let dish = foodList.find((eatable) => { return eatable.food_id === item.food_id });
                            return sum + item.quantity * dish.price;
                        }, 0
                        )}
                        </div>
                        <div className="delivery-charges">
                            Delivery charge : &#8377; 30
                        </div>
                        <div className="grandTotal">
                            Grand Total: &#8377;
                            {
                        cart.reduce((sum, item) => {
                            let dish = foodList.find((eatable) => { return eatable.food_id === item.food_id });
                            return sum + item.quantity * dish.price;
                        }, 30
                        )
                    }
                        </div>
                        {/* addcart(handleCheckout(cart)) */}
                        <div className="cart-checkout-btn">
                 {loggedIn ? <button className="go-to-cart-btn" style={{marginLeft: 0}} onClick={()=>{ setisCheckout(true)}}>Proceed to Checkout</button>
                    :<Link to='/login'> <button className="go-to-cart-btn" onClick={()=>{setcarttologin(true);}} style={{textDecoration:'none', marginLeft: 0}}> Proceed to Checkout</button> </Link>}  
                    </div>
                    </>
                }
               
            </div>}
            { isCheckout && 
            
                    <div className="after-checkout total-cart-page">
                        <form onSubmit={(e)=>{addcart(e)}}>
                            <label htmlFor="name">Name :</label>
                            <input required type="text" defaultValue={name} name="name" id="name" onChange={(e)=>{handlechange(e)}}/>
                            <label htmlFor="mobile-no"> Mobile No.: </label>
                            <input required type="text"  id="mobile-no" name="mobile" style={{textDecoration: 'none'}} onChange={(e)=>{handlechange(e)}}/>
                            <label htmlFor="address">Address :</label>
                            <input type="text" required id="address" name="address" onChange={(e)=>{handlechange(e)}}/>
                            <div className="order-btn">
                            <button type="submit" className="order-btn" style={{marginLeft: 0}}>Order</button>
                            </div>
                        </form>
                            <button onClick={()=>{setisCheckout(false)}}>Go Back</button>
                    </div>
            }
         
            </div>
            {/* {cart.length !=0 &&  <Suggestions addOne={addOne} subtractOne={subtractOne} cart = {cart}/>} */}
            {  cart.length!==0 && !isCheckout && <div className="checkout">
            { loggedIn ? <button className="checkout-btn" style={{marginLeft: 0}} onClick={()=>{setisCheckout(true)}}>Proceed to Checkout</button>
                    :<Link to='/login'> <button className="checkout-btn" style={{textDecoration:'none', marginLeft: 0}}> Proceed to Checkout</button> </Link>}                      
            </div>}

                {loggedIn && <PrevOrders userID={userId} addOne={addOne} subtractOne={subtractOne} foodList = {foodList} cart={cart}/>}
                
               
        </div>
            
              )
            
}

export default Cart;