import {useEffect, useRef, useState } from "react";
import CartDialog from "./CartDialog";
import FoodList from "./FoodList";
import CategoryList from "./CategoryList";
import './Homepage.css'
import axios from "axios";
const Home = ( { MasterData,menu,addOne, subtractOne, cart,NavbarRef,FooterRef}) => {

let HeightOfFoodlist;
const [CategoryNames, setCategoryNames] = useState([]);
useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/category-list/')
    .then(res=>{
        setCategoryNames(res.data)
    })
    .catch(err=> {console.log('failed to get category-list')})
    HeightOfFoodlist= menuref.current.getBoundingClientRect().bottom-menuref.current.getBoundingClientRect().top;
},[])
    
    // connecting FoodList and Categorylist---------------------->>>
    
    const myref = useRef(null);
    const menuref = useRef(null)
    function scrollToCategory(CategoryId) {
        if(myref.current) myref.current.scrollToCategory(CategoryId); 
    }
   
   
    return (
        
        <div className="home">
            <CategoryList categoryNames = {CategoryNames}  scrollToCategory={scrollToCategory} />
            <FoodList MasterData={MasterData}  menuref={menuref} NavbarRef={NavbarRef} ref={myref} subtractOne = {subtractOne} addOne = {addOne} cart = {cart}/>
            <CartDialog subtractOne={subtractOne} addOne={addOne} cart={cart} menu = {menu}/>
        </div>
    );
}
 
export default Home;