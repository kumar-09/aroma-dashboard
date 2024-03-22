import { useEffect, useState } from "react";
import ItemComponent from "./HomePage/ItemsComponent";
import axios from "axios";

function Suggestions({addOne, subtractOne, cart}) {
    const [sug, setSug] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(
        () => {
            setTimeout(() => {axios.get('http://127.0.0.1:8000/api/menu/Cold Drinks/')
            .then((res) => {
                
                if(res.status !== 200){
                    throw new Error ("Not able to fetch data");
                }
                setSug(res.data);
                setLoading(false);
            })
            .catch((err)=>{
                console.log(err);
                setLoading(false);
            })
        }, 0)
    }
        , []
    );
  
    return(
        <div className="suggestions">
            <div style={{margin: '2.5% 0'}}>Grab a delightful beverage before you leave!!</div>
            {(!loading && sug.length === 0) && <div>Cannot connect to server :(</div>}
            {loading && <div>Loading........</div>}
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            {sug  && sug.map((item, i)=> <ItemComponent Food={item} subtractOne = {subtractOne} addOne = {addOne} key={i} quantity={((cart.find((eatable => eatable.id === item.id)))??{quantity: 0}).quantity}  ItemInfo={'Item-info-dif-design'} ItemName={'Item-name-dif-design'}  ItemPriceInfo={'Item-info-price-dif-design'} AddBtn={'Add-item-dif-design'} ImgClass={'Item-img-dif-design'} MainClass={'Fooditem-dif-design'}/> )}
       </div>
        </div>
    )
    
}

export default Suggestions;