import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Category from './Components/Category';
import { fetcher } from './fetcher';

function App() {
  cosnt [categories, setCategories] = useState([]);
  cosnt [products, setProducts] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
  const data = fetcher ("/categories");
   setCategories(data);
  }
  fetchData();
  }, [])

  const handleCategoryClick = id => {
    const data = fetcher ("/products");
    setProducts(data);
  }

  const renderCategories = () => {
    return Category.map(
      <Category key = {c.id} id = {c.id} title = {c.title} onCategoryClick = {() => handleClickCategory(c.id)} />
    );
  }

  const renderProducts = () => {
    return products.map( p =>
      <div>{p.title}</div>
    );
  }
  return (
    <React.Fragment>
   <header>My Store</header>
    <section>
      <nav>
      categories && renderCategories()
      </nav>
      <article>
        <h1>Products</h1>
        {prodcuts && renderProducts()}
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
