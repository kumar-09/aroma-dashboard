

import {Route,Routes} from 'react-router-dom'
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
import ScrollToTop from './ScrollToTop';

const App = () => {

//getting main foodlist data (categorywise foodlist)

  const [tempData, settempData] = useState({});
  const [MasterData, setMasterData] = useState([]);
  let temparr=[];
  const [menu, setmenu] = useState([]);
  const [categories, setcategories] = useState([]);
  let data;
    useEffect(() => {
      
        axios.get('http://localhost:8000/api/all-category-menu')
        .then(res => {
          data = res.data;
          settempData(data);
          console.log(data);
          
        })
        // .catch(err => {console.log("Error thrown")})
      
      axios.get('http://127.0.0.1:8000/api/menu/')
      .then(res=> {
        setmenu(res.data);
      })
      .catch( err=>{
        console.log('failed to get menu list.')
      })

      axios.get('http://127.0.0.1:8000/api/category-list/')
      .then(res=>{
          setcategories(res.data);
      })
    },[]);

useEffect(()=>{
  Object.keys(tempData).forEach( key => {
    temparr.push([key,tempData[key]])
  })
  setMasterData(temparr);
},[tempData])

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
//getting footer height for making it stays at bottom.
  useLayoutEffect(() => { 
    if(FooterRef.current){ 
      let footerHeight = FooterRef.current.getBoundingClientRect().height;
      console.log(footerHeight)
      document.documentElement.style.setProperty('--footerHeight',`${footerHeight}px`)}
  }, []);

  useEffect(()=>{   
    let onload = ()=>{
    console.log('loaded');
       document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
       })} 
     window.addEventListener('load',onload)
    },[MasterData])

  return (
    <>
    <div className="App">
      <ScrollToTop/>
      <Navbar NavbarRef={NavbarRef} loggedIn = {loggedIn} email = {email} foodList = {menu} setLoggedIn={setLoggedIn}/>
        
        <Routes>
          <Route path='/' element = {<Home MasterData={MasterData} addOne={addOne} menu={menu} subtractOne={subtractOne} cart={cart} NavbarRef={NavbarRef} FooterRef={FooterRef}/>} /> 
          <Route path='/Categories' element={<Categories categories={categories} cart={cart}/>}/>
          <Route path = '/Cart' element = {<Cart cart={cart} addOne={addOne} subtractOne={subtractOne} foodList={menu} loggedIn={loggedIn} userId={email}/>}/>
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
