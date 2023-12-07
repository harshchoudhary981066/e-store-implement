import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Category from './Components/Category';

function App() {
  cosnt [results, setResults ] = useState([]);
  useEffect(() => {
    fetch("http:/localhost:3001/categories")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResults(data);
    })
  }, [])

  const renderCategories = () => {
    return results.map(
      <Category key = {c.id} id = {c.id} title = {c.title} />
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
        Main area
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
