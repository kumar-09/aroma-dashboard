import Cart from './Cart';
import FoodList from './FoodList';
import ItemComponent from './ItemsComponent';

import {BrowserRouter,Route,Routes,Link,} from 'react-router-dom'
import Navbar from './Navbar';

import Home from './Home';
import CartItem from './cartItem';
import Categories from './Categories';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      {/* <Link to='/Categories'>Categories</Link> */}
     {/* {<BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path= '/Categories' element={<Categories/>}/>
        </Routes>
      </main> */}
      
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/Categories' element={<Categories/>}/>
          
        </Routes>
     
    </div>
  );
}

export default App;
