import React from 'react'

const Category_Products = ({title, image, features, specs, stock}) => {
  return (
    <article>
    <div className = 'category-product-title'>{title}</div>
    <figure>
        <div className='category-product-image'>
            <img src = {'./assets/${image}'} alt = {title} />
        </div>
    </figure>
    <aside>
        <div className='category-product-info-dimensions'>
            <h3>Dimensions</h3>
            <label>{specs.dimensions}</label>
        </div>

        {/*'specs.capacity &&' Works as an 'if' */}
        { specs.capacity &&  
        <div className='category-product-info-capacity'>
            <h3>Capacity</h3>
            <label>{specs.capacity}</label>
        </div>
        }

        <div className='category-products-info-features'>
            <h3>Features</h3>
            <ul>
                {features?.map( (f, i) => {
                   return <li key={'feature${i}'}>{f}</li> 
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
            <button>View Prodcut</button>
            <button>Add To Basket</button>
        </div>

    </aside>
    </article>
  )
}


export default Category_Products
