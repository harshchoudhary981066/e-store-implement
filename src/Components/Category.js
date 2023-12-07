import React from 'react'

const Category = props => {
  return (
    <div>
      <div key = {props.id}>{props.title}</div>
    </div>
  )
}

export default Category
