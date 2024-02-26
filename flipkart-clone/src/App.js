import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Box} from '@mui/material';
import DataProvider from './context/DataProvider';
//Components 
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import DetailView from './Components/details/DetailView';
import ProductDetails from './Components/details/ProductDetails';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
<>
 <div id="root" style={{ height: '100vh', width: '100%', margin: 0, padding: 0 }}>
<DataProvider>
<CartProvider>
  <Router>
  <Header/>
  <Box style={{marginTop: 55}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<DetailView/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </Box>
  </Router>
  </CartProvider>
</DataProvider>
  </div>
</>
  );
}
export default App;
