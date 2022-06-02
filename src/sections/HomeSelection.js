import React, { useState } from 'react'
import styles from './HomeSelection.module.css'
import Image from 'next/image'
import SecondaryButton from '../components/SecondaryButton'

import { CgHeart } from 'react-icons/cg'
import {  selectionData } from '../utils/constants'

const HomeSelection = () => {
  const [value, setValue] = useState(0)

  const nextSlide = () => {
    setValue(value + 1)
  }

  const prevSlide = () => {
    setValue(value - 1)
  }



  const { title, price, img, slug } = selectionData[value]  
  return (
    <section className={styles.section}>
     <div className={`${styles.wrapper} container`}>
      <div className={styles['text-block']}>
       <h2 className='title'>We have a huge selection</h2>
       <p className="description">You can buy more than 2000 bottles of luxury wine from us. We sell the best bottles created from the purest grapes harvested in the fertile fields of Italy, France, Spain, Portugal and even South America. </p>
       <p className="description">The average aging time for one bottle of our wine is 5 years.</p>
       <p className="description">We produce more than 70% of the existing types of wine. Among them are dry, semi-dry, semi-sweet, sweet, strong, dessert, liqueur, flavored. To sweeten and enhance the taste, according to technology, we add honey and sugar.</p>
       <SecondaryButton href='shop'>view all</SecondaryButton>
      </div>
      <div className={styles['img-block']}>
       <div className={styles.slider}>
        <div className={styles.img}>
        <Image src={img} alt='wine' layout='fill' objectFit='contain' />
       </div>
       <div className={styles.buttons}>
        <button className={styles.prev} onClick={prevSlide} disabled={value === 0}>prev</button>
        <button className={styles.next} onClick={nextSlide} disabled={value === selectionData.length - 1}>next</button>
       </div>
       </div>
       <div className={styles.info}>
        <div className={styles.head}>
         <h3>{title}</h3>
         <button>
          <CgHeart />
         </button>
        </div>
        <span>€{price.toFixed(2)}</span>
        <SecondaryButton href={`products/${slug}`}>view details</SecondaryButton>
       </div>
      </div>
     </div>
    </section>
  )
}

export default HomeSelection