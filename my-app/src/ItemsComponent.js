
import './ItemsComponent.css'
import { useState } from 'react'

const ItemComponent = ({Food}) => {
 
  

   const [Btnstate, setBtnstate] = useState(0);
   

   function AddtoCart(Food) {
      
      setBtnstate(Btnstate+1);
      Food.quantity+=1;
     
   }
  
   function RemovefromCart(Food) {
  
      if(Food.quantity>1) {Food.quantity-=1;
      setBtnstate(Btnstate-1);}
  
         else if (Food.quantity>0) {
            Food.quantity-=1;
         setBtnstate(0);
      }
      
   }

   return (
      <>
      
        
             <div className="Fooditem">
             <div className="Item-image">
                <img src={Food.image} alt='food' />
             </div>
             <div className="Item-info">
                <div className="Item-name">{Food.name}</div>
                <div className='Item-info-price'>
                   <div>
                      &#x20B9;  {Food.price}
                   </div>
                   <div className="Add-item">
                      {!Btnstate ? (<button className='Init-add-btn' id={Food.id} onClick={()=>{AddtoCart(Food)}}> ADD <span> +</span></button>) :
                         (
                            <>
                               <button id={toString(Food.id)} className='After-Init-btn' onClick={()=>{RemovefromCart(Food)}} > - </button>
                               <div id={toString(Food.id)} className='After-Init-btn' >{Food.quantity}</div>
                               <button id={toString(Food.id)} className='After-Init-btn' onClick={()=>{AddtoCart(Food)}}> + </button>
                            </>
                         )}
                   </div>
                </div>
             </div>
          </div>
         
     
     </>
   )
}

export default ItemComponent;