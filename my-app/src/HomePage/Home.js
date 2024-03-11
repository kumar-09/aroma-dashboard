import {useEffect, useRef, useState } from "react";
import CartDialog from "./CartDialog";
import FoodList from "./FoodList";
import CategoryList from "./CategoryList";
import './Homepage.css'

const Home = ( {list, addOne, subtractOne, cartItems, menu,HeaderRef,FooterRef}) => {
    const categories = list;

    /*const subtractOneMenu = (id) => {
        const tempList = list.map((item) => {
            if(item.dish.id === id){
                item.quantity = item.quantity - 1;
            }
            return item;
        });
        setList(tempList);
    }*/
    const CategoryName = [ 'Sandwich', 'Cold Drinks', 'Noodles', 'Rices', 'Parathas'];

    // connecting FoodList and Categorylist---------------------->>>
    
    const myref = useRef(null);
    const menuref = useRef(null)
    function scrollToCategory(CategoryId) {
        if(myref.current) myref.current.scrollToCategory(CategoryId); 
    }
    //------------------------------<<<
    //css var height of foodlist ---
    let HeightOfFoodlist;
    // if(menuref.current){
        
    //         console.log(menuref.current);
    // }
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
            <CategoryList categories = {CategoryName}  scrollToCategory={scrollToCategory} />
            <FoodList menuref={menuref}HeaderRef={HeaderRef} ref={myref} foodItems = {categories} subtractOne = {subtractOne} addOne = {addOne} menu = {menu} cart = {cartItems}/>
            <CartDialog myref={CartRef} subtractOne={subtractOne} addOne={addOne} cartList={cartItems} menu = {menu}/>
        </div>
    );
}
 
export default Home;