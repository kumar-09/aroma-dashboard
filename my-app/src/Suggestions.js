import ItemComponent from "./HomePage/ItemsComponent";

function Suggestions({suggestions, addOne, subtractOne}) {
    /*var suggestions = [];
    for(let i = 0; suggestions.length <= 3; i++){
        var food=(foodList[Math.floor(Math.random()*foodList.length)]);
        console.log(food);
        suggestions = suggestions.splice(0, suggestions.indexOf(food)).concat(suggestions.splice(suggestions.indexOf(food)+1));
        suggestions.push(food);
        console.log(suggestions);
    }*/
    return(
        <div className="suggestions">
            <h3 className="suggestions">Discover Something New!</h3>
            {suggestions.map((item, i)=> <ItemComponent Food={item} subtractOne = {subtractOne} addOne = {addOne}/> )}
        </div>
    )
    
}

export default Suggestions;