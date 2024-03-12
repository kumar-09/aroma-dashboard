import { Link } from 'react-router-dom';
import './CategoryTemplate.css'

const CategoryTemplate = ({category}) => {

    return ( 

        <Link  to={'./CategoryFoodList-'+category[0].category} className='category-Link'>
            <div className="CategoryTemplate" >
                <div className="Category-img">
                    <img src='' alt='category'/>
                </div>
                <div className="Category-name-categories">
                   <p> {category[0].category}</p>
                </div>
            </div>
        </Link>
     );
}
 
export default CategoryTemplate;