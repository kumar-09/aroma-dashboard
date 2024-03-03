
import './ItemsComponent.css'

const ItemComponent = ({Food, subtractOne, addOne,sf}) => {
 

   //const [Btnstate, setBtnstate] = useState(0);

   return (
      <>
      
        
             <div className={sf}>
             <div className="Item-image">
                <img src={Food.dish.image} alt='food' />
             </div>
             <div className="Item-info">
                <div className="Item-name">{Food.dish.name}</div>
                <div className='Item-info-price'>
                   <div>
                     
                      &#x20B9;  {Food.dish.price}
                   </div>
                   <div className="Add-item">
                      {(Food.quantity === 0) ? (<button className='Init-add-btn' id={Food.dish.id} onClick={()=>{addOne(Food.dish.id)}}> ADD <span> +</span></button>) :
                         (
                            <>
                               <button id={toString(Food.id)} className='After-Init-btn' onClick={()=>{subtractOne(Food.dish.id)}} > - </button>
                               <div id={toString(Food.id)} className='After-Init-btn' >{Food.quantity}</div>
                               <button id={toString(Food.id)} className='After-Init-btn' onClick={()=>{addOne(Food.dish.id)}}> + </button>
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