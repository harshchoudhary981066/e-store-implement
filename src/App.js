import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Category from './Components/Category';
import { fetcher } from './fetcher';

function App() {
  cosnt [categories, setCategories] = useState([]);
  cosnt [products, setProducts] = useState([]);
  useEffect(() => {
   const data = fetcher ("/categories");
   setCategories(data);
  }, [])

  const handleCategoryClick = id => {
    fetch("http:/localhost:3001/products?catId=" + id)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setProducts(data);
    })
  }

  const renderCategories = () => {
    return Categories.map(
      <Category key = {c.id} id = {c.id} title = {c.title} onCategoryClick = {() => handleClickCategory(c.id)} />
    );
  }

  const renderProducts = () => {
    return Products.map( p =>
      <div>{p.title}</div>
    );
  }
  return (
    <React.Fragment>
   <header>My Store</header>
    <section>
      <nav>
      results && renderCategories()
      </nav>
      <article>
        <h1>Products</h1>
        {Prodcuts && renderProducts()}
      </article>
      <footer>
        footer
      </footer>
    </section>
    <div className="App">
      {results.map(d =>( 
        <div key = {d.id}>{d.title}</div>
      ))}
    </div>
    </React.Fragment>
  );
}

export default App;
