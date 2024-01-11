import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
{/*Third Party tool used to create a single class for styling components in CSS */}
import styled from 'styled-components';

const ProductTitle = styled.div`
grid-column: 1/ span 3;
color: darkslategray;
font-weight: bold;
font-size: 1.5 en;
padding-left: 10 px;
`;

//while replacing a 'div', styled.div is used
const ProductImageContainer = styled.div`
padding: 10 px;
width: 60%;
`
//while replacing and 'img' tag, styled.img is used
const ProductImageContainerImage = styled.img`
width: 100%;
height: 100%;
`
const ProductInfo = styled.div`
display: flex;
flex-direction: column; 
`

const Category_Products = ({id, title, image, features, specs, stock}) => {
    const navigate = useNavigate();
  return (
    <article>
    <ProductTitle>
    <Link to={'products/${id}'}>{title}</Link>
    </ProductTitle>
    <figure>
        <ProductImageContainer>
            <ProductImageContainerImage src = {'./assets/${image}'} alt = {title} />
        </ProductImageContainer>
    </figure>
    <aside>
        <ProductInfo>
            <h3>Dimensions</h3>
            <label>{specs.dimensions}</label>
        </ProductInfo>

        {/*'specs.capacity &&' Works as an 'if' */}
        { specs.capacity &&  
        <ProductInfo>
            <h3>Capacity</h3>
            <label>{specs.capacity}</label>
        </ProductInfo>
        }

        <div className='category-products-info-features'>
            <h3>Features</h3>
            <ul>
                {features?.map( (f, i) => {
                   return <li key={'feature ${i}'}>{f}</li> 
                }

                )}
            </ul>
        </div>
    </aside>
    <aside className='category-product-finance'>
        <div className='category-product-finance-price'>
            &pound; {price}
        </div>

        <div className='category-product-info-stock'>
            <label>Stock: {stock}</label>
            <label>FREE DELIVERY</label>
        </div>

        <div className='category-product-action'>
            <button onClick = { () => navigate('products/${id}')}>View Prodcut</button>
            <button>Add To Basket</button>
        </div>

    </aside>
    </article>
  )
}


export default Category_Products
