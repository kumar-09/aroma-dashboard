import './Homepage.css'
const CategoryList = ({categories,GotoCategory}) => {
    return ( 
        <div className="CategoryList">
        {
            categories.map( (category,index) => (
                <div className="categorylist-name" key={index} onClick={()=> {GotoCategory(category)}}>{category}</div>
            ))
        }
        </div>
     );
}
 
export default CategoryList;