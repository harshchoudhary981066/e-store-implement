import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher';

const ProductDetail = () => {
  const {productId} = useParams(); //can be deconstructed from 'params' by using {productId} in it's place
  const [product, setProduct] = React.useState({errormessage: '', data: []});
  React.useEffect( () => {
    const fetchData = async () => {
      const responseObject = await getProductById(productId);
       setProduct(responseObject);
  }
  fetchData();
  }, [productId]);


  return (
    <div>ProductDetail title{product.data.title}</div>
  )
}

export default ProductDetail
