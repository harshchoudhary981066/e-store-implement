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

const ProductInfoHeader = styled.h3`
    color: darkslategray;
    font-size: 1em;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 5px;
`;

const ProductInfoListItem = styled.li`
    padding-top: 5px;
`;

const ProductInfoStock = styled.div`
    padding-left: 10px;
    margin-top: 20px;
    padding-top: 10px;
    background-color: lightgrey;
    height: 20%;
    width: 30%;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
`;

const ProductInfoStockLabel = styled.label`
    padding-bottom: 5px;
`;

const ProductInfoAction = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductInfoActionButton = styled.button`
    width: 160px;
    height: 30px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: lightgray;
    border: solid 1px slategrey;
    font-weight: bold;
`;

const ProductInfoFinancePrice = styled.div`
    color: darkslategray;
    font-size: 2em;
    font-weight: bold;
    padding-top: 10px;
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
    <ProductInfoArticle>
    <ProductTitle>
        <Link to={`/products/${id}`}>{title}</Link>
    </ProductTitle>

    <figure>
        <ProductImageContainer>
            <ProductImage src={`/assets/${image}`} alt={title} />
        </ProductImageContainer>
    </figure>

    <aside>
        <ProductInfo>
            <ProductInfoHeader>Dimensions</ProductInfoHeader>
            <label>{specs.dimensions}</label>
        </ProductInfo>

        {specs.capacity && (
            <ProductInfo>
                <ProductInfoHeader>Capacity</ProductInfoHeader>
                <label>{specs.capacity}</label>
            </ProductInfo>
        )}

        <ProductInfo>
            <ProductInfoHeader>Features</ProductInfoHeader>
            <ul>
                {features?.map((f, i) => {
                    return <ProductInfoListItem key={`feature${i}`}>{f}</ProductInfoListItem>;
                })}
            </ul>
        </ProductInfo>
    </aside>

    <aside>
        <ProductInfoFinancePrice>
            &pound;{price}
        </ProductInfoFinancePrice>

        <ProductInfoStock>
            <ProductInfoStockLabel>Stock Level: {stock}</ProductInfoStockLabel>
            <ProductInfoStockLabel>FREE Delivery</ProductInfoStockLabel>
        </ProductInfoStock>

        <ProductInfoAction>
            <ProductInfoActionButton onClick={() => navigate(`/products/${id}`)}>
                View Product
            </ProductInfoActionButton>
            <ProductInfoActionButton onClick={() => addProduct({id, title, price})}>Add to Basket</ProductInfoActionButton>
        </ProductInfoAction>
    </aside>
</ProductInfoArticle>
  )
}


export default Category_Products
