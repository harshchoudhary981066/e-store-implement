import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getCategories } from "./fetcher";

import ProductDetail from "./components/productDetail";
import Basket from "./components/basket";
import Checkout from "./Components/Checkout";
import Category from "./components/category";
import Home from "./components/home";
import OrderConfirmation from "./components/orderconfirmation";
import Layout from "./components/layout";
import SearchResults from "./components/searchResults";

function App() {
    const [categories, setCategories] = useState({
        errorMessage: "",
        data: [],
    });

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getCategories();
            setCategories(responseObject);
        };
        fetchData();
    }, []);

  {/* The below function can also be written as such:
        const categories = []; (Empty Array)
      for(let i = 0; i < results.length; i++){
        categories.push(<Category key = {c.id} id = {c.id} title = {c.title} onCategoryClick = {() => handleClickCategory(c.id)} />)
      }
        return categories; */}




        return (
          <>
              <BrowserRouter>
                  <Routes>
                      <Route
                          path="/"
                          element={
                              <Layout
                                  categories={categories}
                              />
                          }
                      >
                          <Route index element={<Home />} />
                          <Route path="basket" element={<Basket />} />
                          <Route path="checkout" element={<Checkout />} />
                          <Route path="orderconfirmation" element={<OrderConfirmation />} />
                          <Route path="search" element={<SearchResults /> } />
                          <Route
                              path="categories/:categoryId"
                              element={<Category />}
                          />
                          <Route
                              path="products/:productId"
                              element={<ProductDetail />}
                          />
                      </Route>
                  </Routes>
              </BrowserRouter>
          </>
      );
  }
  
  export default App;