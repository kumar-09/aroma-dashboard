import CategoryTemplate from "./Categories/CategoryTemplate";
import './Categories/CategoryTemplate.css';
const Categories = ({list}) => {
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
                <CategoryTemplate/>
            )) }
        </div>
        </div>
     );
}
 
export default Categories;