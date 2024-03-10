
import './ItemsComponent.css'

const ItemComponent = ({Food, subtractOne, addOne,MainClass, quantity,ImgClass,AddBtn,ItemPriceInfo,ItemInfo,ItemName}) => {
   return (
      <>
      

             <div className={MainClass}>
             <div className={ImgClass}>
                <img src={'http://localhost:8000/'+Food.image} alt='food' />
             </div>
             <div className={ItemInfo}>
                <div className={ItemName}>{Food.name}</div>
                <div className={ItemPriceInfo}>
                   <div>
                     
                        {Food.price} &#x20B9;
                   </div>
                   <div className={AddBtn}>
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