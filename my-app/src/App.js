

import {BrowserRouter,Route,Routes,Link,} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './HomePage/Home';
import Login from './LoginPage/Login';
import LoginHome from './LoginPage/Home';
import Categories from './Categories';
import { useState, useEffect,useRef, useLayoutEffect } from 'react';
import Cart from './Cart';
import Footer from './Footer';
import TNC from './TNC';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import AdminPage from './AdminPage';
import Register from './LoginPage/Register';
import axios from 'axios';
import CategoryFoodList from './Categories/CategoryFoodList';
import LogOut from './LoginPage/Logout';

const App = () => {

  /*const [list, setList] = useState([
    {dish: {id:1 ,name:'Paneer Cheese Sandwich', price: '66', image:'./images/3f797cae-9813-4239-b745-9e2cdf09932c.webp', category: 'Sandwich'}, quantity:0},
    {dish: {id:2,name: 'Chicken cheese Sandwich', price: '66', image: '', category: 'Sandwich'} ,quantity:0},
    {dish: {id:3, name:'Egg Cheese Sandwich', price:'60',image:'', category: 'Sandwich'}, quantity:0},
    {dish: {id:4, name:'Veg Cheese Sandwich', price:'55', image:'', category: 'Sandwich'}, quantity:0},
    {dish: {id:5, name:'sprite', price:'20', image:'', category:'Cold Drinks'}, quantity:0},
    {dish: {id:6, name: 'coke', price:'20', image:'', category:'Cold Drinks'}, quantity:0},
    {dish: {id:7, name: 'fanta', price:'20', image:'', category:'Cold Drinks'}, quantity:0},
    {dish: {id:8, name: 'Veg Hakka Noodles', price:'45', image:'', category:'Noodles'}, quantity:0},
    {dish: {id:9, name: 'Veg Fried Rice', price:'50', image:'', category:'Rices'}, quantity:0},
    {dish: {id:10, name: 'Paneer Paratha', price:'26', image:'', category:'Parathas'}, quantity:0},
  ]);*/

  const list = [
    {id:1 ,name:'Paneer Cheese Sandwich', price: '66', image:'./images/3f797cae-9813-4239-b745-9e2cdf09932c.webp', category: 'Sandwich'},
    {id:2, name: 'Chicken cheese Sandwich', price: '66', image: '', category: 'Sandwich'},
    {id:3, name:'Egg Cheese Sandwich', price:'60',image:'', category: 'Sandwich'}, 
    {id:4, name:'Veg Cheese Sandwich', price:'55', image:'', category: 'Sandwich'}, 
    {id:5, name:'sprite', price:'20', image:'', category:'Cold Drinks'},
    {id:6, name: 'coke', price:'20', image:'', category:'Cold Drinks'},
    {id:7, name: 'fanta', price:'20', image:'', category:'Cold Drinks'}, 
    {id:8, name: 'Veg Hakka Noodles', price:'45', image:'', category:'Noodles'}, 
    {id:9, name: 'Veg Fried Rice', price:'50', image:'', category:'Rices'},
    {id:10, name: 'Paneer Paratha', price:'26', image:'', category:'Parathas'},
  ];
//getting main foodlist data (categorywise foodlist)

  const [tempData, settempData] = useState({});
  const [MasterData, setMasterData] = useState([]);
    let data;
    useEffect(() => {
      setTimeout(() => {
        axios.get('http://localhost:8000/api/all-category-menu')
        .then(res => {
          data = res.data;
          settempData(data);
          console.log(data);
          
        })
        // .catch(err => {console.log("Error thrown")})
      }, 1000);
    },[]);

let temparr=[];

useEffect(()=>{
  Object.keys(tempData).forEach( key => {
    temparr.push([key,tempData[key]])
  })
  setMasterData(temparr);
},[tempData])

 

// console.log(MasterData);
const [menu, setmenu] = useState([]);
  useEffect( ()=> {
    axios.get('http://127.0.0.1:8000/api/menu/')
    .then(res=> {
      setmenu(res.data);
    })
    .catch( err=>{
      console.log('failed to get menu list.')
    })
  },[])
  const [categories, setcategories] = useState([]);
useEffect(()=>{
  axios.get('http://127.0.0.1:8000/api/category-list/')
  .then(res=>{
      setcategories(res.data);
  })

},[])

  const [cart, setCart] = useState([]);

  const subtractOne = (id) =>{
    const tempCart = [...cart];
    let index = tempCart.findIndex((item) => 
    {
      return item.food_id === id;
    });
    if(index === -1){
      console.log("Logical error related to subtraction before adding to cart");
    }
    else if(tempCart[index].quantity === 1){
      tempCart.splice(index, 1);
    }
    else if(tempCart[index].quantity > 1){
      tempCart[index].quantity -= 1;
    }
    else{
      console.log("Error, quantity of items in cart is becoming negative");
    }
    setCart(tempCart);
  }

  const addOne = (id) => {
    /*const tempCart = cart;//The real blunder, arrays passed by reference
    let index = tempCart.findIndex((item) => 
    {
      return item.id === id;
    });
    if(index === -1){
      tempCart.push({id: id, quantity: 1});
    }
    else if(tempCart[index].quantity === 10){
      alert("You cannot add more than 10 units of one dish!!");
    }
    else if(tempCart[index].quantity >= 1){
      tempCart[index].quantity +=  1;
    }
    else{
      console.log("Error, quantity of items in cart is becoming negative");
    }*/
    setCart(()=>{
      const tempCart = [...cart];
    let index = tempCart.findIndex((item) => 
    {
      return item.food_id === id;
    });
    if(index === -1){
      tempCart.push({food_id: id, quantity: 1});
    }
    else if(tempCart[index].quantity === 10){
      alert("You cannot add more than 10 units of one dish!!");
    }
    else if(tempCart[index].quantity >= 1){
      tempCart[index].quantity +=  1;
    }
    else{
      console.log("Error, quantity of items in cart is becoming negative");
    }
    return tempCart;
    });
  }

const [loggedIn, setLoggedIn] = useState(false);
const [email, setEmail] = useState('');


//setting useRef to navbar to access header element
  const NavbarRef = useRef(null);
  const FooterRef = useRef(null);
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
      // function updateSize() {
      //     setSize([window.innerWidth, window.innerHeight]);
      // }
      // window.addEventListener('resize', updateSize);
      // updateSize();
      // return () => window.removeEventListener('resize', updateSize);
      
    if(FooterRef.current){ 
      let footerHeight = FooterRef.current.getBoundingClientRect().height;
      console.log(footerHeight)
      document.documentElement.style.setProperty('--footerHeight',`${footerHeight}px`)}
  }, []);

  
 
//---------------------------------------------------------------<<<<
   // for showing active navlink
  //  const [activeNavlink, setactiveNavlink] = useRef(null);

  //In Home Component "list" refers to the category-list while "menu" refers to the food-item list 
  return (
    <>
    <div className="App">
      
      <Navbar HeaderRef={NavbarRef} loggedIn = {loggedIn} email = {email} foodList = {list} setLoggedIn={setLoggedIn}/>
        
        <Routes>
          <Route path='/' element = {<Home MasterData={MasterData} addOne={addOne} menu={menu} subtractOne={subtractOne} cartItems={cart} HeaderRef={NavbarRef} FooterRef={FooterRef}/>} /> 
          <Route path='/Categories' element={<Categories categories={categories} cart={cart}/>}/>
          <Route path = '/Cart' element = {<Cart cartItems={cart} addOne={addOne} subtractOne={subtractOne} foodList={menu} loggedIn={loggedIn} userId={email}/>}/>
          <Route path="/" element={<LoginHome email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/register" element={<Register setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/account" element={<account setEmail={setEmail} />} />
          <Route path = "/tnc" element = {<TNC/>}/>
          <Route path = "/about-us" element = {<AboutUs/>} />
          <Route path = "/contact-us" element = {<ContactUs/>} />
          <Route path='/admin' element = {<AdminPage/>}/>
          <Route path = '/logout' element = {<LogOut setLoggedIn = {setLoggedIn}/>}/>
          { categories.map (category => (
             <Route key={category.Type} path={'Categories/CategoryFoodlist-'+category.Type} element={<CategoryFoodList category={category.Type}  addOne={addOne} subtractOne={subtractOne}  cart  ={cart} />} />
          ))}
         
        </Routes>
    </div>
          <Footer footerref={FooterRef}/>
</>
  );
}

export default App;
