import ItemComponent from "./HomePage/ItemsComponent"

//To be altered according to how past order data is stored in the backend
//Will only be rendered if login.status === true, and at least one previous order
//Otherwise the random suggestions can be rendered

function PrevOrders({pastOrders, addOne, subtractOne}){
    return (
        <div>
            {pastOrders.map((item) => 
                <ItemComponent subtractOne={subtractOne} addOne={addOne} Food={item}/>
            )}
        </div>
    )
}

export default PrevOrders;