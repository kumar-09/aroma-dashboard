import { useEffect, useState } from "react";
import axios from "axios";
import ItemComponent from "./HomePage/ItemsComponent"

//To be altered according to how past order data is stored in the backend
//Will only be rendered if login.status === true, and at least one previous order
//Otherwise the random suggestions can be rendered

function PrevOrders({userID, addOne, subtractOne, foodList, cart}){
    const [pastOrders, setPastOrders] = useState([]);
    let data;
    useEffect(
        () =>{
            axios.get('http://127.0.0.1:8000/api/prevlist/'+userID)
                .then((list)=> {
                    data = list.data;
                    setPastOrders(data)
                })

                .catch((err) => {
                    console.log("Fetch Error" + err);
                });
        }
    ,[userID]
    );
    const tempList = [];//This has pdtID: quantity pairs
    for(let i=0; i<=pastOrders.length-1; i++){
    for (const key in pastOrders[i]) {
        tempList.push(...pastOrders[i][key]);
    }}
    const suitFormat = [];
    for(let i = tempList.length-1; i >=0 && suitFormat.length<3; i--)
    {
        for(const key in tempList[i]){
            const foodItem = foodList.find((dish) => {return ((dish.food_id).toString() === key)});
            if(foodItem && suitFormat.findIndex((dish) =>{ return dish.food_id === foodItem.food_id})< 0){
                suitFormat.push(foodItem);
            }
        }
    }
    return (
        <>
        <div>
        {suitFormat && <p style={{fontSize:25,fontWeight:500,margin:'5% 1%'}}>Previous Orders</p>}
        </div>
        <div className="previous-orders" style={{display: "flex", flexWrap: 'wrap'}}>
            
            {suitFormat && suitFormat.map((item) => 
                <ItemComponent subtractOne={subtractOne} addOne={addOne} Food={item} quantity={((cart.find((eatable => eatable.food_id === item.food_id)))??{quantity: 0}).quantity } ItemInfo={'Item-info-dif-design'} ItemName={'Item-name-dif-design'}  ItemPriceInfo={'Item-info-price-dif-design'} AddBtn={'Add-item-dif-design'} ImgClass={'Item-img-dif-design'} MainClass={'Fooditem-dif-design'} key={item.id}/>
            )}
        </div>
        </>
    )
}

export default PrevOrders;