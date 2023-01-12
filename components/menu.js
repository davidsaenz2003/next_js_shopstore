import React from 'react'
import Link from "next/link"
import style from "../styles/menu.module.css"
import { useAppContext } from './stateWrapper'
import { Carter_One } from '@next/font/google'

const menu = () => {

    const cart = useAppContext();

    function handleOpenCart() {
        cart.openCart();
    }


    return (
        <nav className={style.menu}>
            <div>
                <Link legacyBehavior href="/">
                    <a className={style.link}>Home</a>
                </Link>
                <Link href="/store" legacyBehavior>
                    <a className={style.link}>Store</a>
                </Link>
                <Link href="/faq" legacyBehavior>
                    <a className={style.link}>FAQ</a>
                </Link>
            </div>
            <div>
                <a className={style.link} href="#" onClick={handleOpenCart}> Cart ({cart.getNumberOfItems()}) </a>
            </div>
        </nav>
    )
}

export default menu