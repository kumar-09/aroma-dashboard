

import {BrowserRouter,Route,Routes,Link,} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './HomePage/Home';
import Login from './LoginPage/Login';
import LoginHome from './LoginPage/Home';
import Categories from './Categories';
import { useState } from 'react';
import Cart from './Cart';


function App() {

  const [list, setList] = useState([
    {dish: {id:1 ,name:'Paneer Cheese Sandwich', price: '66', image:'./images/3f797cae-9813-4239-b745-9e2cdf09932c.webp', category: 'Sandwich'}, quantity:0},
    { dish: {id:2,name: 'Chicken cheese Sandwich', price: '66', image: '', category: 'Sandwich'} ,quantity:0},
    {dish: {id:3, name:'Egg Cheese Sandwich', price:'60',image:'', category: 'Sandwich'}, quantity:0},
    {dish: {id:4, name:'Veg Cheese Sandwich', price:'55', image:'', category: 'Sandwich'}, quantity:0},
    {dish: {id:5, name:'sprite', price:'20', image:'', category:'cold drinks'}, quantity:0},
    {dish: {id:6, name: 'coke', price:'20', image:'', category:'cold drinks'}, quantity:0}
  ]);

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

const [loggedIn, setLoggedIn] = useState(false);
const [email, setEmail] = useState('');

  return (
    <div className="App">
      <Navbar/>
        
        <Routes>
          <Route path='/' element = {<Home list={list} setList={setList} addOne={addOne} subtractOne={subtractOne} cartItems={cart}/>} />
          <Route path='/Categories' element={<Categories/>}/>
          <Route path = '/Cart' element = {<Cart cartItems={cart} addOne={addOne} subtractOne={subtractOne} foodList={list}/>}/>
          <Route path="/" element={<LoginHome email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
    </div>
  );
}

export default App;
