import ItemComponent from "../HomePage/ItemsComponent";
import './CategoryTemplate.css'
import { useEffect,useState } from "react";
import axios from 'axios'
import img from '../Spin-1s-200px.gif'
const CategoryFoodList = ({category,addOne,subtractOne, cart}) => {
    const [Failed, setFailed] = useState(false);
    const [Load, setLoad] = useState(true);
// category API ----------------------->>>>
let CategoryDatalist;
const [CategoryData,setCategoryData]= useState([]);
useEffect (  ()=>{
   axios.get('http://127.0.0.1:8000/api/menu/'+category[0].category)
  .then ( res =>{
    console.log(res.data)
    CategoryDatalist = res.data;
    setLoad(false);
  setCategoryData(CategoryDatalist);
})
.catch( error => 
  {console.log('failed to fetch category data')
              setFailed(true);
              setLoad(false);
          })
},[]);

//fliter---->>>

let max_price,min_price,price_interval;

    let tempPriceArr =[];
    CategoryData.map( food => {
        tempPriceArr.push(food.price);
    })
     max_price = Math.max(...tempPriceArr);
     min_price = Math.min(...tempPriceArr);
     price_interval = (max_price-min_price) % 5 !==0 ? Math.floor((max_price-min_price)/5)+1 : (max_price-min_price)/5;
    

    return ( 
        <>

        <div className="CategoryFoodList">
            <div className="CategoryTitle">
                {category[0].category}
            </div>
           
            
                <div className="categorylist" style={{display:'flex',justifyContent:'space-evenly'}}>
                { CategoryData.length!==0 && (
                    <div className="filteroption" style={{display:'inline-flex',flexDirection:'column'}}>
                  <div><input  className="filteroption"  type="checkbox"/><label className="filterlabel">&#x20B9;{min_price}-&#x20B9;{min_price+price_interval}</label></div>  
                  <div> <input  className="filteroption"  type="checkbox"/><label className="filterlabel">&#x20B9;{min_price+price_interval}-&#x20B9;{min_price+2*price_interval}</label></div>  
                  <div> <input  className="filteroption"  type="checkbox"/><label className="filterlabel">&#x20B9;{min_price+2*price_interval}-&#x20B9;{min_price+3*price_interval}</label></div>  
                  <div> <input  className="filteroption"  type="checkbox"/><label className="filterlabel">&#x20B9;{min_price+3*price_interval}-&#x20B9;{min_price+4*price_interval}</label></div>  
                    <div>    <input  className="filteroption"  type="checkbox"/><label className="filterlabel">&#x20B9;{min_price+4*price_interval}-&#x20B9;{min_price+5*price_interval}</label></div>  
                    
                </div>
               
            )}
            
            
            <div className="categorylist-flex">
                { Load && 
                    (<div className="loading">
                        <img src={img} style={{ width:'100px'}} alt="Loading" />
                        <h2>Loading...</h2>
                    </div>)}
                { Failed && 
                    (
                        <div className="Failed">
                            connection error
                        </div>
                    )

                }
                { CategoryData.map(Food => (
                    <ItemComponent  Food={Food} key={Food.food_id} subtractOne = {subtractOne} addOne = {addOne} ItemInfo={'Item-info-dif-design'} ItemName={'Item-name-dif-design'}  ItemPriceInfo={'Item-info-price-dif-design'} AddBtn={'Add-item-dif-design'} ImgClass={'Item-img-dif-design'} MainClass={'Fooditem-dif-design'} quantity={((cart.find((eatable => eatable.id === Food.id)))??{quantity: 0}).quantity}/>
                ))}
            </div>
           
        </div>
        </div>
        
        </>
     );
}
 
export default CategoryFoodList;