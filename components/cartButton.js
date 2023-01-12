import React from 'react'
import style from "../styles/cartButton.module.css"
import { useAppContext } from './stateWrapper'

const CartButton = ({item}) => {

  const cart = useAppContext();

  function handleClick() {

    cart.addItemToCart(item)

  }

  return (
    <button className={style.button} onClick={handleClick}>Add to cart</button>
  )
}

export default CartButton