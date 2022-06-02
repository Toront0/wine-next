import React, { useContext, useState } from 'react'
import styles from './Items.module.css'
import Image from 'next/image'
import Link from 'next/link'
import SecondaryButton from '../../components/SecondaryButton'

import { CgHeart } from 'react-icons/cg'
import { WishlistContext } from '../../utils/wishlist-context'
import Pagination from '../../components/Pagination'

const Products = ({ products }) => {
  const { addItemToWishlist, items } = useContext(WishlistContext)
  const [data, setData] = useState(products)
  const [currentPage, setCurrentPage] = useState(1)
  const [productPerPage, setProductsPerPage] = useState(8)

  const indexOfLastProduct = currentPage * productPerPage
  const indexOfFirstProduct = indexOfLastProduct - productPerPage
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {currentProducts.map((product, i) => {
          console.log(product)
          const existInWishlist = items.find(item => item.id === product.id)
        return <Item  key={product.id} id={product.id} existInWishlist={existInWishlist} price={product.price} title={product.title} imgs={product.imgs} addItemToWishlist={addItemToWishlist} slug={product.slug}/>
      })}
      <Pagination productsPerPage={productPerPage} totalProducts={data.length} paginate={paginate} currentPage={currentPage} />
      </div>
    </section>
  )
}

export default Products

const Item = ({ slug, id, title, imgs, price, existInWishlist, addItemToWishlist }) => {
  return <div className={styles.product}> 
  <Link href={`products/${slug}`} passHref>
        <div className={styles['inner-wrapper']}>
        <div className={styles.img}>
        <Image src={imgs[0]} alt={title} layout='fill' objectFit='contain' />
      </div>
      <div className={styles.info}>
        <div className={styles['info-head']}>
          <h3>{title}</h3>
          <span className={styles.price}>€{price.toFixed(2)}</span>
        </div>
        <button className={styles.details}>details</button>
      </div>
      </div>
    </Link> 
      <button className={`${styles.heart} ${existInWishlist && styles.active}`} onClick={() => addItemToWishlist({ id: id, title: title, price: price, img: imgs[0] })} type='button' >
        <CgHeart />
      </button>
  </div>
}