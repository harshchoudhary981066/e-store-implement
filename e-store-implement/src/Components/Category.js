import React from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../fetcher';
import Category_Products from './Category_Products';

{/*The id, title, onCategoryClick is used to get rid of the props from the inner statements. 
If we do not use or define these in Category brackets we will have to use "props.id", "props.title"
 in the body. It is called destructuring props */}

 const Category = ({id, title, onCategoryClick}) => {
  const [product, setProduct] = React.useState({errormessage: '', data: []});
  const {categoryId} = useParams();

  React.useEffect( () => {
    const fetchData = async () => {
      const responseObject = await getProducts(categoryId);
       setProduct(responseObject);
  }
  fetchData();
  }, [categoryId]);

  const renderProducts = () => {
    return products.data.map( p =>
      <Category_Products key={p.id} {...p}>{p.title}</Category_Products>
    );
  }
  return (
    <div>
      {products.errormessage && <div> Error: {products.errormessage}</div>}
        {prodcuts.data && renderProducts()} {/*The "products && is used because the usestate([]) 
        having no parameters won't throw an error. It is a kind of check mechanism for empty string*/}
    </div> 
  )
}

export default Category
