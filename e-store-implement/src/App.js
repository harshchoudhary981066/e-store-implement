import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import { getCategories} from './fetcher';
import { Link, Outlet } from 'react-router-dom';
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
import { Layout } from 'react-router-dom';
import home from './Components/home';

function App() {
  cosnt [categories, setCategories] = useState({errormessage: '', data: []});
  cosnt [products, setProducts] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
  const responseObject = await getCategories();
   setCategories(responseObject);
  }
  fetchData();
  }, [])

  {/* The below function can also be written as such:
        const categories = []; (Empty Array)
      for(let i = 0; i < results.length; i++){
        categories.push(<Category key = {c.id} id = {c.id} title = {c.title} onCategoryClick = {() => handleClickCategory(c.id)} />)
      }
        return categories; */}




  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout categories = {categories} />}>
        <Route index element = {<Home />}></Route>
      <Route path='basket' element={<basket />}/>
      <Route path='checkout' element={<Checkout />}/>
      <Route path='products/:productId' element = {<ProductDetail />}/> {/*The colon in 'products/:productId' tells that productId is a dynamic element and can change */}
      <Route path='categories/:categoryID' element = {<Category />}></Route>
      </Route >
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
