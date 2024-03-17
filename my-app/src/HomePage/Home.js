import {useEffect, useRef, useState } from "react";
import CartDialog from "./CartDialog";
import FoodList from "./FoodList";
import CategoryList from "./CategoryList";
import './Homepage.css'
import axios from "axios";
const Home = ( { MasterData,menu,addOne, subtractOne, cartItems,HeaderRef,FooterRef}) => {

const [CategoryNames, setCategoryNames] = useState([]);
useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/category-list/')
    .then(res=>{
        setCategoryNames(res.data)
    })
    .catch(err=> {console.log('failed to get category-list')})
},[])
    
    // connecting FoodList and Categorylist---------------------->>>
    
    const myref = useRef(null);
    const menuref = useRef(null)
    function scrollToCategory(CategoryId) {
        if(myref.current) myref.current.scrollToCategory(CategoryId); 
    }
    //------------------------------<<<
    //css var height of foodlist ---
    let HeightOfFoodlist;
    useEffect(()=>{
        console.log(menuref.current);
            HeightOfFoodlist= menuref.current.getBoundingClientRect().bottom-menuref.current.getBoundingClientRect().top;
            // const style = document.documentElement.style/*getComputedStyle(document.documentElement)*/;
            // style.setProperty('--foodHeight',`${HeightOfFoodlist}px`)
},[]);

    const CartRef = useRef(null);
    
        // if(CartRef.current && FooterRef.current){
        // window.addEventListener('scroll',()=>{
        //     let CartHeight= CartRef.current.getBoundingClientRect().bottom;
        // let FooterTop = FooterRef.current.getBoundingClientRect().top;
        // if(FooterTop<=CartHeight) {
        //     CartRef.current.style.display = 'static';
        //     console.log('changed display');
        //     console.log(CartRef.current.style.display)
        // }
        // else CartRef.current.style.display = 'fixed';
        // })}
    
    return (
        
        <div className="home">
            <CategoryList categories = {CategoryNames}  scrollToCategory={scrollToCategory} />
            <FoodList MasterData={MasterData}  menuref={menuref} HeaderRef={HeaderRef} ref={myref} subtractOne = {subtractOne} addOne = {addOne} cart = {cartItems}/>
            <CartDialog myref={CartRef} subtractOne={subtractOne} addOne={addOne} cartList={cartItems} menu = {menu}/>
        </div>
    );
}
 
export default Home;