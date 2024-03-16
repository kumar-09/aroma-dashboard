import CategoryTemplate from "./Categories/CategoryTemplate";
import './Categories/CategoryTemplate.css';
const Categories = ({list, cart}) => {
    const categories = list;
    
    return ( 
        <div className="Categories">
        <h1>
            Categories
        </h1>
        <hr></hr>
        <br></br>
        <br></br>
        <div className="Category-list">
             { categories.map(category => (
                <CategoryTemplate category={category} key={category[0].category} cart = {cart}/>
            )) }
        </div>
        </div>
     );
}
 
export default Categories;