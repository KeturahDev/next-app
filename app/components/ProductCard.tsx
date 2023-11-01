import React from 'react'
import AddToCart from './AddToCart';
import styles from "./ProductCard.module.css";

// this is a server component by default
// will not handle state or its react hooks
// Will statically render: will build once during application build
const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCart />
    </div>
  )
}

export default ProductCard;
