import React from 'react'

{/*The id, title, onCategoryClick is used to get rid of the props from the inner statements. 
If we do not use or define these in Category brackets we will have to use "props.id", "props.title"
 in the body. It is called destructuring props */}
const Category = ({id, title, onCategoryClick}) => {
  return (
    <div>
      <div key = {id} onClick = {() => onCategoryClick(id)}>{title}</div>
    </div>
  )
}

export default Category
