import React from 'react'
import { useAppContext } from './stateWrapper'
import Product from "./product"
import style from "../styles/shoppingCart.module.css"

const ShoppingCart = () => {

    const cart = useAppContext();

    function closeCartItem() {
        cart.closeCart()
    }
 
    function getTotal() {
        const total = cart.items.reduce((acc, item) => acc + item.qty * item.price, 0)

        return total
    }


    return (
        <div className={style.shoppingCart} style={{ display: cart.isOpen ? "block" : "none" }}>
              <button className={style.close} onClick={closeCartItem}>Close</button>

            {cart.items.length === 0 ? <div className={style.empty}> Cart is empty </div> : <> 
                <h3>Your Items</h3>
                    <div className={style.total}>
                      {cart.items.map(item => <Product key={item.id} item={item} qty={item.qty} showAs="ListItem"></Product>)}
                    </div>
                    <div style={{display: "flex", justifyContent:"center", marginTop:"20px", fontWeight: "bold", fontSize: "28px"}}>Total : ${getTotal()}</div>
                    </>
            }              
        </div>
    )
}

export default ShoppingCart