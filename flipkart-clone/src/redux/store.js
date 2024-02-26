 import {createStore , combineReducers,    applyMiddleware} from 'redux';
// import { getProducts } from '../../../Server/Controller/Product-controller';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getProductsReducer , getProductDetailsReducer} from './reducers/ProductReducer';
 const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails:getProductDetailsReducer
 });

const middleware = [thunk];
 const store = createStore(
 reducer, 
 composeWithDevTools(applyMiddleware(...middleware))
 )  
 export default store;