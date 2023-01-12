import React from 'react'
import Link from "next/link"
import Image from "next/image"
import style from "../styles//product.module.css"
import { convertToPath } from '../libs/utils'
import Button from "./cartButton"
import styleProduct from "../styles/product.module.css"

const product = ({ item, showAs, qty }) => {

    if (showAs === "Page") {
        return <div className={style.page}>
            <div>
            <Image src={item.image} alt={item.description} width={600} height={600}></Image>
            </div>

            <div className={style.info}>
                <div><h2>{item.title}</h2></div>
                <div className={style.price}>{item.price}</div>
                <div>{item.description}</div>
                <div>
                    <Button item={item}></Button>
                </div>
            </div>
        </div>
    }

    if (showAs === "ListItem") {
        return <div className={style.listItem}>

            <div>
                <Image
                src={item.image} alt={item.description} width={100} height={100}></Image>
            </div>
            <div>
                <div>{item.title}</div>
                <div style={{fontWeight:100}}>{item.price}</div>
                {qty === 0 ? "" : <div style={{fontWeight:100}}>{qty} units</div>}
                {qty === 0 ? "" : <div style={{fontWeight:100}}>Subtotal: ${qty * item.price}</div>}
            </div>
            
        </div>
    }

    return (<div className={style.item}>
        <div>
            <Link legacyBehavior href={`/store/${convertToPath(item.title)}`}>
                <a>
                    <Image src={item.image} alt={item.description} width={300} height={300}></Image>
                </a>
            </Link>
        </div>

        <div>
            <h3>
                <Link legacyBehavior href={`/store/${convertToPath(item.title)}`}>
                    <a>
                        {item.title}
                    </a>
                </Link>
            </h3>
        </div>

        <div>${item.price}</div>

        <div>
        <Button item={item}></Button>
        </div>
    </div>)

}

export default product