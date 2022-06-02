import React, { useContext } from 'react'
import styles from './ListItems.module.css'
import { RiSearchLine } from 'react-icons/ri'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
import { WishlistContext } from '../../utils/wishlist-context'

import ProductRating from '../../components/ProductRating'
import SecondaryButton from '../../components/SecondaryButton'
import PrimaryButton from '../../components/PrimaryButton'

const ListItems = () => {
  const {items} = useContext(WishlistContext)
  
  if (items.length === 0) {
    return <section className={styles.section}>
      <div className={`${styles.box} sm-container`}>
        <h2>You have no items in your wishlist</h2>
        <PrimaryButton href='products'>Fill it</PrimaryButton>
      </div>
    </section>
  }



  return (
    <section className={styles.section}>
     <div className={`${styles.wrapper} sm-container`}>
      <h2 className={styles.title}>Wishlist</h2>
       <div className={styles.search}>
        <input type="text" placeholder='search'></input>
        <RiSearchLine />
       </div>
       <div className={styles.items}>
         {items.map(item => {
           return <Item img={item.img} title={item.title} price={item.price}  />
         })}
       </div>
     </div>
    </section>
  )
}

export default ListItems

const Item = ({ img, title, price }) => {
 return (
  <div className={styles.item}>
   <div className={styles.img}>
    <Image src={img} alt={title} layout='fill' objectFit='contain' />
   </div>
   <div className={styles.info}>
    <div className={styles.head}>
     <h4>{title}</h4>
     <ProductRating />
     <span className={styles.price}>€{price.toFixed(2)}</span>
    </div>
    <div className={styles.buttons}>
     <SecondaryButton hasArrow href='products'>details</SecondaryButton>
     <button className={styles.heart}>
      <FaHeart />
     </button>
    </div>
   </div>
  </div>
 )
}