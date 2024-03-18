// Assuming a food-item is represented as an object of the form:
// foodItem = {name, cost, .... other keys allowed but only these two are relavent)}   

function CartItem({ foodItem, add, subtract, number, showImg = false,cost,fooditem }) {

    return (
        <div className={fooditem} key={foodItem.food_id}>
          { showImg  &&  <div className="food-img"><img src={'http://127.0.0.1:8000/'+foodItem.image} style={{width:'100%'}} alt={foodItem.name} /></div>}
            <div className="cart-food-info">
            <div className="name">{foodItem.name.toUpperCase()}</div>
            
            <div className={cost}>
                <div className="cost-price">&#8377; {foodItem.price}</div>
                <div>
                    <span className="quantity">
                    <button className="minus" onClick={() => { subtract(foodItem.food_id) }}>-</button>
                    <button className="label" disabled>{number}</button>
                    <button className="plus" onClick={() => { add(foodItem.food_id) }}>+</button>
                </span>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CartItem;