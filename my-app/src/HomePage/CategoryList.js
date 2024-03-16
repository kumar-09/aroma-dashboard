import './Homepage.css'
const CategoryList = ({categories,scrollToCategory}) => {


    return ( 
        <div className="CategoryList">
        {
            categories.map( (category,index) => (
                <div className="categorylist-name" id={category.Type+'btn'}  key={index} onClick={()=> {scrollToCategory(category.Type)}}>{category.Type}</div>
            ))
        }
        </div>
     );
}
 
export default CategoryList;