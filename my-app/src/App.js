

import {BrowserRouter,Route,Routes,Link,} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './HomePage/Home';
import Login from './LoginPage/Login';
import LoginHome from './LoginPage/Home';
import Categories from './Categories';
import { useState, useEffect } from 'react';
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

  const categories =[];
  const Sandwich= list.filter((Food) => Food.category === 'Sandwich');
  const ColdDrinks = list.filter((Food)=> Food.category ==='Cold Drinks');
  const Noodles = list.filter((Food)=>Food.category ==='Noodles');
  const Rices = list.filter((Food)=> Food.category==='Rices');
  const Paratha= list.filter((Food) => Food.category === 'Parathas');
  categories.push(Sandwich,ColdDrinks,Noodles,Rices,Paratha);
// console.log(categories)
 
  const [MasterData, setMasterData] = useState({details : [], })
    let data;
    
    useEffect(() => {
      setTimeout(() => {
        axios.get('http://localhost:8000/api/menu/')
        .then(res => {
          data = res.data;
          setMasterData({
            details: data
          });
        })
        .catch(err => {console.log("Error thrown")})
      }, 1000);
    }, []);

    MasterData.details = MasterData.details.map((dish) => {return {dish, quantity:0}})

    console.log(MasterData.details);

  
  const [cart, setCart] = useState([]);

  const subtractOne = (id) =>{
    const tempCart = [...cart];
    let index = tempCart.findIndex((item) => 
    {
      return item.id === id;
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
    }
    return tempCart;
    });
  }

const [loggedIn, setLoggedIn] = useState(false);
const [email, setEmail] = useState('');





//---------------------------------------------------------------<<<<
  //In Home Component "list" refers to the category-list while "menu" refers to the food-item list 
  return (
    <div className="App">
      
      <Navbar  loggedIn = {loggedIn} email = {email} foodList = {list} setLoggedIn={setLoggedIn}/>
        
        <Routes>
          <Route path='/' element = {<Home list={categories} menu = {list} addOne={addOne} subtractOne={subtractOne} cartItems={cart}/>} />
          <Route path='/Categories' element={<Categories list={categories}/>}/>
          <Route path = '/Cart' element = {<Cart cartItems={cart} addOne={addOne} subtractOne={subtractOne} foodList={list}/>}/>
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
             <Route key={category[0].category} path={'Categories/CategoryFoodlist-'+category[0].category} element={<CategoryFoodList category={category} addOne={addOne} subtractOne={subtractOne}  cart  ={cart} />} />
          ))}
         
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
