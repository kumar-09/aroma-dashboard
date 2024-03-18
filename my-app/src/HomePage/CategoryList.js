import './Homepage.css'
const CategoryList = ({categoryNames,scrollToCategory}) => {


    return ( 
        <div className="CategoryList">
        {
            categoryNames.map( (category,index) => (
                <div className="categorylist-name" id={category.Type+'btn'}  key={index} onClick={()=> {scrollToCategory(category.Type)}}>{category.Type}</div>
            ))
        }
        </div>
     );
}
 
export default CategoryList;