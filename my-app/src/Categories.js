import CategoryTemplate from "./Categories/CategoryTemplate";
import './Categories/CategoryTemplate.css';
import { useState } from "react";
import axios from "axios";
const Categories = ({cart,categories}) => {
  
    return ( 
        <div className="Categories">
        <h1>
            Categories
        </h1>
        <hr></hr>
        <br></br>
        <br></br>
        <div className="Category-list">
             { categories.map(category => (
                <CategoryTemplate category={category} key={category.Type} cart = {cart}/>
            )) }
        </div>
        </div>
     );
}
 
export default Categories;