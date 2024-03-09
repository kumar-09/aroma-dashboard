import { useEffect } from "react";
import axios from "axios";
import ItemComponent from "./HomePage/ItemsComponent"

//To be altered according to how past order data is stored in the backend
//Will only be rendered if login.status === true, and at least one previous order
//Otherwise the random suggestions can be rendered

function PrevOrders({userID, addOne, subtractOne}){
    let pastOrders = [];
    useEffect(
        () =>{
            axios.get('http://127.0.0.1:8000/api/prevlist/'+userID+'/')
                .then((list)=> {
                    console.log(list);
                    pastOrders = list;
                })
                .catch((err) => {
                    console.log("Fetch Error" + err);
                });
        }
        , []
    );
    return (
        <div>
            <p>Previous Orders coming soon</p>
            {pastOrders.map((item) => 
                <ItemComponent subtractOne={subtractOne} addOne={addOne} Food={item}/>
            )}
        </div>
    )
}

export default PrevOrders;