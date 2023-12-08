import React from 'react'

const Category = ({id, title, onCategoryClick}) => {
  return (
    <div>
      <div key = {id} onClick = {() => onCategoryClick(id)}>{title}</div>
    </div>
  )
}

export default Category
