// Assuming a food-item is represented as an object of the form:
// foodItem = {name, cost, .... other keys allowed but only these two are relavent)}   

function CartItem({ foodItem, add, subtract, number, showImg = false,cost,fooditem }) {

    return (
        <div className={fooditem} key={foodItem.id}>
            {console.log(showImg)}
          { showImg  &&  <div className="food-img"><img src={foodItem.image} alt={foodItem.name} /></div>}
            <div className="cart-food-info">
            <div className="name">{foodItem.name.toUpperCase()}</div>
            
            <div className={cost}>
                <div className="cost-price">&#8377; {foodItem.price}</div>
                <div>
                    <span className="quantity">
                    <button className="minus" onClick={() => { subtract(foodItem.id) }}>-</button>
                    <button className="label" disabled>{number}</button>
                    <button className="plus" onClick={() => { add(foodItem.id) }}>+</button>
                </span>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CartItem;