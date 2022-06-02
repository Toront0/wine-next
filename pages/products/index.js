import React from 'react'
import NavBar from '../../src/components/NavBar'
import styles from '../../styles/pages/Products.module.css'
import PageHeader from '../../src/components/PageHeader'
import img from '/public/images/products-head.jpg'
import dynamic from 'next/dynamic'

import { supabaseAdmin } from '../../src/utils/supabaseAdmin'
const Items = dynamic(() => import('../../src/sections/Products/Items'))

const ProductsPage = ({ products }) => {

  return (
    <>
     <NavBar className='color-primary' bg='bg-primary' />
     <main className={styles.main}>
       <PageHeader img={img} title='There’s no right way or wrong way - to taste wine' />
      <h2 className={styles.title}>Products</h2>
      <Items products={products}/>
     </main>
    </>
  )
}

export async function getStaticProps() {


  const { data } = await supabaseAdmin
    .from('products')
    .select('*')
    .order('id');
    return {
      props: {
        products: data
      }
    }
}

export default ProductsPage