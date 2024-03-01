import ItemComponent from "./HomePage/ItemsComponent";

function Suggestions({foodList, addOne, subtractOne}) {
    const suggestions = [];
    for(let i = 0; i <= 3; i++){
        suggestions.push(foodList[Math.floor(Math.random()*foodList.length)]);
    }
    return(
        <div className="suggestions">
            <h3 className="suggestions">Discover Something New!</h3>
            {suggestions.map((item, i)=> <ItemComponent Food={item} subtractOne = {subtractOne} addOne = {addOne}/> )}
        </div>
    )
    
}

export default Suggestions;