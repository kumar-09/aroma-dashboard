import { useEffect, useState } from "react";
import axios from "axios";
import ItemComponent from "./HomePage/ItemsComponent"

//To be altered according to how past order data is stored in the backend
//Will only be rendered if login.status === true, and at least one previous order
//Otherwise the random suggestions can be rendered

function PrevOrders({userID, addOne, subtractOne, foodList, cart}){
    const [pastOrders, setPastOrders] = useState([]);
    useEffect(
        () =>{
            axios.get('http://127.0.0.1:8000/api/prevlist/'+userID)
                .then((list)=> {
                    console.log(/* "Previous orders:" +*/ JSON.stringify(list.data));
                    //pastOrders = list.data[0];
                    setPastOrders(list.data);
                })
                .catch((err) => {
                    console.log("Fetch Error" + err);
                });
        }
    ,[userID]
    );
    const tempList = [];//This has pdtID: quantity pairs
    for (const key in pastOrders[0]) {
        tempList.push(...pastOrders[0][key]);
    }
    const suitFormat = [];
    for(let i = 0; i <= tempList.length - 1; i++)
    {
        for(const key in tempList[i]){
            const foodItem = foodList.find((dish) => {return ((dish.food_id).toString() === key)});
            if(foodItem && suitFormat.findIndex((dish) =>{ return dish.id === foodItem.id})< 0){
                suitFormat.push(foodItem);
            }
        }
    }
    return (
        <div>
            {suitFormat && <p>Previous Orders</p>}
            {suitFormat && suitFormat.map((item) => 
                <ItemComponent subtractOne={subtractOne} addOne={addOne} Food={item} quantity={((cart.find((eatable => eatable.id === item.id)))??{quantity: 0}).quantity } key={item.id}/>
            )}
        </div>
    )
}

export default PrevOrders;