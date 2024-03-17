import { Link } from 'react-router-dom';
import './CategoryTemplate.css'

const CategoryTemplate = ({category}) => {

    return ( 

        <Link  to={'./CategoryFoodList-'+category.Type} className='category-Link'>
            <div className="CategoryTemplate" >
                <div className="Category-img">
                    <img src={'http://localhost:8000/'+category.image} style={{width: '100%',borderRadius: 'inherit'}} alt='category'/>
                </div>
                <div className="Category-name-categories">
                   <p> {category.Type}</p>
                </div>
            </div>
        </Link>
     );
}
 
export default CategoryTemplate;