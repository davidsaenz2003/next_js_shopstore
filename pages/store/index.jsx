import React from 'react'
import Layout from "../../components/layout"
import { getItems } from '../../services/itemService';
import Image from 'next/image';
import Product from "../../components/product"
import styleItems from "../../styles//product.module.css"

export default function index({items}) {
  return (
    <Layout title="Store">
       
        <h1>This is the store</h1>
        <div className={styleItems.items}>
        {
            items && items.map(item => 
            <Product item={item} key={item.id} showAs="Default"></Product>
            )
        }
        </div>
       
    </Layout>
  );

}

export async function getStaticProps() {

    const res = await getItems();

    return {
        props: {
            items: res
        }
    }
    
}
