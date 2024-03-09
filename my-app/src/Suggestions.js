import { useEffect, useState } from "react";
import ItemComponent from "./HomePage/ItemsComponent";
import axios from "axios";

function Suggestions({addOne, subtractOne, cart}) {
    const [sug, setSug] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(
        () => {
            setTimeout(() => {axios.get('http://127.0.0.1:8000/api/menu/cold-drink/')
            /*.then((res) => {
                console.log("Ami's data has arrived: ", res.data);
                if(res.ok === false){
                    throw new Error ("Not able to fetch data");
                }
                return Promise.resolve(res.data);
            } ) */
            .then((res) => {
                
                if(res.status !== 200){
                    throw new Error ("Not able to fetch data");
                }
                setSug(res.data);
                setLoading(false);
            })
            .catch((err)=>{
                console.log(err);
                setError(true);
                setLoading(false);
            })
        }, 2000)
    }
        , []
    );
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
            <h3 className="suggestions">Grab a delightful beverage before you leave!!</h3>
            {error && <h4>Cannot connect to server</h4>}
            {loading && <h4>Loading........</h4>}
            {sug  && sug.map((item, i)=> <ItemComponent Food={item} subtractOne = {subtractOne} addOne = {addOne} key={i} quantity={((cart.find((eatable => eatable.id === item.id)))??{quantity: 0}).quantity}/> )}
        </div>
    )
    
}

export default Suggestions;