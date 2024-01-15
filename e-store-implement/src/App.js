import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import { getCategories} from './fetcher';
import { Link, Outlet } from 'react-router-dom';

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
          <Outlet />
          </main>
          </section>
          <footer>
            footer
          </footer>
   
    <div className="App">
      {results.map(d =>( 
        <div key = {d.id}>{d.title}</div>
      ))}
    </div>
    </React.Fragment>
  );
}

export default App;
