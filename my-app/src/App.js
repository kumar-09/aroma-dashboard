

import {BrowserRouter,Route,Routes,Link,} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './HomePage/Home'
import Categories from './Categories';
import { useState } from 'react';
import Cart from './Cart';


function App() {

  const [list, setList] = useState([
    {dish: {id:1 ,name:'Paneer Cheese Sandwich', price: '66', image: './images/3f797cae-9813-4239-b745-9e2cdf09932c.webp'}, quantity:0},
    { dish: {id:2,name: 'Chicken cheese Sandwich', price: '66', image: ''} ,quantity:0},
    {dish: {id:3, name:'Egg Cheese Sandwich', price:'60',image:''}, quantity:0},
    {dish: {id:4, name:'Veg Cheese Sandwich', price:'55', image:''}, quantity:0}
  ]);

  const cart = list.filter((item) => item.quantity !==0);

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
  
  return (
    <div className="App">
      <Navbar/>
      
        <Routes>
          <Route path='/' element = {<Home list={list} addOne={addOne} subtractOne={subtractOne} cartItems={cart}/>} />
          <Route path='/Categories' element={<Categories/>}/>
          <Route path = '/Cart' element = {<Cart cartItems={cart}/>}/>
        </Routes>
     
    </div>
  );
}

export default App;
