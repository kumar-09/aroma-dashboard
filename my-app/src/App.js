import Cart from './Cart';
import FoodList from './FoodList';
import ItemComponent from './ItemsComponent';
import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <FoodList/>
      <Cart/>
    </div>
  );
}

export default App;
