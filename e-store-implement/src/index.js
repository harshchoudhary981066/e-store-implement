import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductDetail from './Components/ProductDetail';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import basket from './Components/basket';
import Checkout from './Components/Checkout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='basket' element={<basket />}/>
      <Route path='checkout' element={<Checkout />}/>
      <Route path='products/:productId' element = {<ProductDetail />}/> {/*The colon in 'products/:productId' tells that productId is a dynamic element and can change */}
      <Route path='categories/:categoryID' element = {<Category />}></Route>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
