import { Link } from 'react-router-dom';
import './CategoryTemplate.css'

const CategoryTemplate = ({category}) => {
    return ( 

        <Link  to={'./CategoryFoodList-'+category[0].dish.category} className='category-Link'>
        <div className="CategoryTemplate" >
            <div className="Category-img">
                <img src='' alt='category'></img>
            </div>
            <div className="Category-name-categories">
                {category[0].dish.category}
            </div>
        </div>
        </Link>
     );
}
 
export default CategoryTemplate;