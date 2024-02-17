import FoodList from './HomePage//FoodList';
import ItemComponent from './HomePage/ItemsComponent';

import {BrowserRouter,Route,Routes,Link,} from 'react-router-dom'
import Navbar from './Navbar';

import Home from './Home';
import CartItem from './HomePage/cartItem';
import Categories from './Categories';


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/Categories' element={<Categories/>}/>
          
        </Routes>
     
    </div>
  );
}

export default App;
