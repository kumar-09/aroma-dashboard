import CategoryTemplate from "./Categories/CategoryTemplate";
import './Categories/CategoryTemplate.css';
const Categories = () => {
    return ( 
        <div className="Categories">
        <h1>
            Categories
        </h1>
        <hr></hr>
        <br></br>
        <br></br>
        <div className="Category-list">
             
                <CategoryTemplate/>

        </div>
        </div>
     );
}
 
export default Categories;