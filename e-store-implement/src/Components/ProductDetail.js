import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher';

const ProductDetail = () => {
  const params = useParams(); //can be deconstructed from 'params' by using {productId} in it's place
  const [product, setProduct] = React.useState({errormessage: '', data: []});
  React.useEffect( () => {
    const fetchData = async () => {
      const responseObject = await getProductById(productId);
       setProduct(responseObject);
  }
  fetchData();
  }, [params.productId]);


  return (
    <div>ProductDetail id:{params.productId}</div>
  )
}

export default ProductDetail
