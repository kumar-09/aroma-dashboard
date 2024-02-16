// Assuming a food-item is represented as an object of the form:
// foodItem = {name, cost, .... other keys allowed but only these two are relavent)}   

function CartItem({foodItem, add, subtract, number}){
    return (
        <div className="food-item">
            <h3 className="name">{foodItem.name}</h3>
            <h3 className="cost">&#8377; {foodItem.cost}</h3>
            <span className="quantity">
                <button className="minus" onClick = {subtract}>-</button>
                <button className="label" disabled>{number}</button>
                <button className="plus"  onClick = {add}>+</button>
            </span>
        </div>  
    );
}

export default CartItem;