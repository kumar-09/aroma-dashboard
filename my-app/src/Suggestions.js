import CartItem from "./HomePage/cartItem";

function Suggestions(foodList) {
    const suggestions = [];
    for(let i = 0; i <= 3; i++){
        suggestions.push(foodList[Math.round(Math.random()*foodList.length)]);
    }
    console.log(suggestions);
    return(
        <div className="suggestions">
            <h3 className="suggestions">Discover Something New!</h3>
            {suggestions.map((item, i)=> <CartItem foodItem={suggestions[i]}></CartItem>)}
        </div>
    )
    
}

export default Suggestions;