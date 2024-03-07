

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

const App = () => {

  const [list, setList] = useState([
    {dish: {id:1 ,name:'Paneer Cheese Sandwich', price: '66', image:'./images/3f797cae-9813-4239-b745-9e2cdf09932c.webp', category: 'Sandwich'}, quantity:0},
    { dish: {id:2,name: 'Chicken cheese Sandwich', price: '66', image: '', category: 'Sandwich'} ,quantity:0},
    {dish: {id:3, name:'Egg Cheese Sandwich', price:'60',image:'', category: 'Sandwich'}, quantity:0},
    {dish: {id:4, name:'Veg Cheese Sandwich', price:'55', image:'', category: 'Sandwich'}, quantity:0},
    {dish: {id:5, name:'sprite', price:'20', image:'', category:'Cold Drinks'}, quantity:0},
    {dish: {id:6, name: 'coke', price:'20', image:'', category:'Cold Drinks'}, quantity:0},
    {dish: {id:7, name: 'fanta', price:'20', image:'', category:'Cold Drinks'}, quantity:0},
    {dish: {id:8, name: 'Veg Hakka Noodles', price:'45', image:'', category:'Noodles'}, quantity:0},
    {dish: {id:9, name: 'Veg Fried Rice', price:'50', image:'', category:'Rices'}, quantity:0},
    {dish: {id:10, name: 'Paneer Paratha', price:'26', image:'', category:'Parathas'}, quantity:0},
  ]);

  const categories =[];
  const Sandwich= list.filter((Food) => Food.dish.category === 'Sandwich');
  const ColdDrinks = list.filter((Food)=> Food.dish.category ==='Cold Drinks');
  const Noodles = list.filter((Food)=>Food.dish.category ==='Noodles');
  const Rices = list.filter((Food)=> Food.dish.category==='Rices');
  const Paratha= list.filter((Food) => Food.dish.category === 'Parathas');
  categories.push(Sandwich,ColdDrinks,Noodles,Rices,Paratha);
console.log(categories)

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

  
  const cart = list.filter((item) => item.quantity !== 0);

  const subtractOne = (id) =>{
    const tempList = list.map((item) => {
        if(item.dish.id === id){
            item.quantity = item.quantity - 1;
        }
        return item;
    });
    setList(tempList);
}

const addOne = (id) => {
    const tempCart = list.map((item) => {
        if(item.dish.id === id){
            item.quantity = item.quantity + 1;
        }
        return item;
    });
    setList(tempCart);
}

const [loggedIn, setLoggedIn] = useState(true);
const [email, setEmail] = useState('');

// onclick eventhandling of category page ----------------------->>>>

const  handleClick_Category = (category) => {
      
}


//---------------------------------------------------------------<<<<

  return (
    <div className="App">

      {
        
      }
      <Navbar  loggedIn = {loggedIn} email = {email}/>
        
        <Routes>
          <Route path='/' element = {<Home list={categories} setList={setList} addOne={addOne} subtractOne={subtractOne} cartItems={cart}/>} />
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
          { categories.map (category => (
             <Route key={category[0].dish.category} path={'Categories/CategoryFoodlist-'+category[0].dish.category} element={<CategoryFoodList category={category} addOne={addOne} subtractOne={subtractOne}  />} />
          ))}
         
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
