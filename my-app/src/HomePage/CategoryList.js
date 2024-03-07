import './Homepage.css'
const CategoryList = ({categories,scrollToCategory}) => {


    return ( 
        <div className="CategoryList">
        {
            categories.map( (category,index) => (
                <div className="categorylist-name" id={category+'btn'}  key={index} onClick={()=> {scrollToCategory(category)}}>{category}</div>
            ))
        }
        </div>
     );
}
 
export default CategoryList;