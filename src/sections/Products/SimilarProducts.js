import React from 'react'
import styles from './SimilarProducts.module.css'
import Image from 'next/image'
import img from '/public/images/wine.png'

const SimilarProducts = () => {
  return (
    <section className={styles.section}>
     <div className={`${styles.wrapper} container`}>
      <h2 className="title">You may also like</h2>
      <div className={styles.items}>
       <Item img={img} title='Conde Villar Vinho Verde Branco 2020 - Quinta das Arcas '  />
      <Item img={img} title='Conde Villar Vinho Verde Branco 2020 - Quinta das Arcas '  />
      <Item img={img} title='Conde Villar Vinho Verde Branco 2020 - Quinta das Arcas '  />
      </div>
     </div>
    </section>
  )
}

export default SimilarProducts

export const Item = ({ img, title}) => {
 return <div className={styles.item}>
  <div className={styles['img-block']}>
   <div className={styles.img}>
   <Image src={img} alt={title} layout='fill' objectFit='cover' />
  </div>
  </div>
    <div className={styles.info}>
      <h3 className={styles['item-title']}>{title}</h3>
      <div className={styles['item-types']}>
       <span>Type:	White wine</span>
       <span>Taste:	dry</span>
      </div>
    </div>
 </div>
}