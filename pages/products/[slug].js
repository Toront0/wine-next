import React from 'react'

import NavBar from '../../src/components/NavBar'
import ProductDescription from '../../src/sections/Products/ProductDescription'
import ProductDetailHero from '../../src/sections/Products/ProductDetailHero'
import Reviews from '../../src/sections/Products/Reviews'
import SimilarProducts from '../../src/sections/Products/SimilarProducts'

import { supabaseAdmin } from '../../src/utils/supabaseAdmin' 

const ProductDetail = ({ item }) => {
  return (
   <>
   <NavBar />
    <ProductDetailHero item={item} />
    <ProductDescription item={item}/>
    <SimilarProducts />
    <Reviews />
    </>
  )
}

export default ProductDetail

export async function getStaticProps({ params }) {
  const {slug} = params
  
  const { data: item } = await supabaseAdmin
  .from('products')
  .select('*')
  .eq('slug', slug)
  .single()
  

  return {
    props: {
      item
    }
  }
}

export async function getStaticPaths() {


  const { data } = await supabaseAdmin
  .from('products')
  .select('slug')
  

  const paths = data.map(item => {
    return {
      params: {
        slug: item.slug
      }
    }
  })
  


    return {
      paths: paths,
      fallback: false
    }
  }
