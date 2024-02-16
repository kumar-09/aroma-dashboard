import FoodList from "./FoodList";
import Cart from "./Cart";

const Home = () => {
    return (
        <div className="home">
            
            <FoodList/>
            <Cart/>
        </div>
    );
}
 
export default Home;