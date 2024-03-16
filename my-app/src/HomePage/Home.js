import {useEffect, useRef, useState } from "react";
import CartDialog from "./CartDialog";
import FoodList from "./FoodList";
import CategoryList from "./CategoryList";
import './Homepage.css'
import axios from "axios";
const Home = ( { menu,addOne, subtractOne, cartItems,HeaderRef,FooterRef}) => {
    /*const subtractOneMenu = (id) => {
        const tempList = list.map((item) => {
            if(item.dish.id === id){
                item.quantity = item.quantity - 1;
            }
            return item;
        });
        setList(tempList);
    }*/
const [CategoryNames, setCategoryNames] = useState([]);
    axios.get('http://127.0.0.1:8000/api/category-list/')
    .then(res=>{
        setCategoryNames(res.data)
    })
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
            <FoodList menuref={menuref} HeaderRef={HeaderRef} ref={myref} subtractOne = {subtractOne} addOne = {addOne} cart = {cartItems}/>
            <CartDialog myref={CartRef} subtractOne={subtractOne} addOne={addOne} cartList={cartItems} menu = {menu}/>
        </div>
    );
}
 
export default Home;