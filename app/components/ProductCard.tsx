import React from 'react'
import AddToCart from './AddToCart';

// this is a server component by default
// will not handle state or its react hooks
// Will statically render: will build once during application build
const ProductCard = () => {
  return (
    <div className='p-5 my-5 hover:bg-emerald-950'>
      <AddToCart />
    </div>
  )
}

export default ProductCard;
