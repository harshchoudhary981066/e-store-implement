import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Category from './Components/Category';
import { fetcher } from './fetcher';

function App() {
  cosnt [categories, setCategories] = useState({errormessage: '', data: []});
  cosnt [products, setProducts] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
  const responseObject = await fetcher ("/categories");
   setCategories(responseObject);
  }
  fetchData();
  }, [])

  const handleCategoryClick = id => {
    const fetchData = async () => {
      const responseObject = await fetcher ("/products?catId=" + id);
       setProducts(responseObject);
  }
  fetchData();
}

  {/* The below function can also be written as such:
        const categories = []; (Empty Array)
      for(let i = 0; i < results.length; i++){
        categories.push(<Category key = {c.id} id = {c.id} title = {c.title} onCategoryClick = {() => handleClickCategory(c.id)} />)
      }
        return categories; */}

  const renderCategories = () => {
    return Category.data.map(
      <Category key = {c.id} id = {c.id} title = {c.title} onCategoryClick = {() => handleClickCategory(c.id)} />
    );
  }

  const renderProducts = () => {
    return products.data.map( p =>
      <div>{p.title}</div>
    );
  }
  return (
    <React.Fragment>
   <header>My Store</header>
    <section>
      <nav>
      {categories.errormessage && <div> Error: {categories.errormessage}</div>}
      {categories && renderCategories()}
      </nav>
      <article>
      {products.errormessage && <div> Error: {products.errormessage}</div>}
        <h1>Products</h1>
        {prodcuts && renderProducts()} {/*The "products && is used because the usestate([]) 
        having no parameters won't throw an error. It is a kind of check mechanism for empty string*/}
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
