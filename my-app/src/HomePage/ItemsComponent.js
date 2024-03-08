
import './ItemsComponent.css'

const ItemComponent = ({Food, subtractOne, addOne,sf, quantity}) => {
 
   return (
      <>
      

             <div className={sf}>
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
                      {(quantity === 0) ? (<button className='Init-add-btn' id={Food.id} onClick={()=>{addOne(Food.id)}}> ADD <span> +</span></button>) :
                         (
                            <>
                               <button id={toString(Food.id)} className='After-Init-btn' onClick={()=>{subtractOne(Food.id)}} > - </button>
                               <div id={toString(Food.id)} className='After-Init-btn' >{quantity}</div>
                               <button id={toString(Food.id)} className='After-Init-btn' onClick={()=>{addOne(Food.id)}}> + </button>
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