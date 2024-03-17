
import './ItemsComponent.css'

const ItemComponent = ({Food, subtractOne, addOne,MainClass, quantity,ImgClass,AddBtn,ItemPriceInfo,ItemInfo,ItemName}) => {
   return (
      <>
             <div className={MainClass}>
             <div className={ImgClass}>
                <img src={'http://localhost:8000/'+Food.image} alt='food' />
             </div>
             <div className={ItemInfo}>
                <div className={ItemName}>{Food.name.toUpperCase()}</div>
                <div className={ItemPriceInfo}>
                   <div>
                     
                   &#x20B9; {Food.price} 
                   </div>
                   <div className={AddBtn}>
                      {(quantity === 0) ? (<button className='Init-add-btn' id={Food.food_id} onClick={()=>{addOne(Food.food_id)}}> ADD <span> +</span></button>) :
                         (
                            <>
                               <button id={toString(Food.food_id)} className='After-Init-btn' onClick={()=>{subtractOne(Food.food_id)}} > - </button>
                               <div id={toString(Food.food_id)} className='After-Init-btn' >{quantity}</div>
                               <button id={toString(Food.food_id)} className='After-Init-btn' onClick={()=>{addOne(Food.food_id)}}> + </button>
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