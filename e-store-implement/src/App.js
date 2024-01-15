import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Category from './Components/Category';
import { getCategories, getProducts } from './fetcher';
import Category_Products from './Components/Category_Products';
import { Link } from 'react-router-dom';

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

  const handleCategoryClick = id => {
    const fetchData = async () => {
      const responseObject = await getProducts();
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
    return Category.data.map( c =>
      <li key = {c.id}><Link to={`/categories/${c.id}`}>{c.title}</Link></li>
    );
  }


  return (
    <React.Fragment>
   <header>My Store</header>
    <section>
      <nav>
      {categories.errormessage && <div> Error: {categories.errormessage}</div>}
      <ul>  
      {categories && renderCategories()}
      </ul>   
      </nav>
      <main>
      
      </main>
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
