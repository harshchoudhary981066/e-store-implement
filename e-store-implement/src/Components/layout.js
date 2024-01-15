import React from "react";
import { Link, Outlet } from "react-router-dom";

const layout = ({categories}) => {
    const renderCategories = () => {
        return Category.data.map( c =>
          <li key = {c.id}><Link to={`/categories/${c.id}`}>{c.title}</Link></li>
        );
      }

    return(
        <>
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
            <Link to = "/">Home</Link> | <Link to = "/basket">Basket</Link>
          </footer>
          </>
    )
}