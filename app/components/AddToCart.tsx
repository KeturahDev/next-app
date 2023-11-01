'use client'
import React from 'react'

// A client component:
// this component defines 'use client' at the top because
// this component will only be able to handle client events
// if the client is what rendered this component 
const AddToCart = () => {
  return (
    <div>
      <button className='btn btn-primary' onClick={() => {console.log("hm")}}>Add to cart</button>
    </div>
  )
}

export default AddToCart;
