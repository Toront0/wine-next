import React from 'react'
import styles from './HomeTestimonial.module.css'
import Image from 'next/image'

import img from '/public/images/testimonial.png'
import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'


const HomeTestimonial = () => {
  return (
    <section className={styles.section}>
     <div className={`${styles.wrapper} container`}>
      <div className={styles['text-block']}>
       <h2 className="title">what people say about us</h2>
       <p className="description">You can buy more than 2000 bottles of luxury wine from us. We sell the best bottles created from the purest grapes harvested in the fertile fields of Italy, France, Spain, Portugal and even South America.</p>
       <p className="description">The average aging time for one bottle of our wine is 5 years.</p>
       <p className="description">We produce more than 70% of the existing types of wine. Among them are dry, semi-dry, semi-sweet, sweet, strong, dessert, liqueur, flavored. To sweeten and enhance the taste, according to technology, we add honey and sugar.</p>
      </div>
      <div className={styles['testimonial-block']}>
       <div className={styles.slider}>
         <div className={styles.head}>
          <button><IoIosArrowBack /></button>
          <Image src={img} alt='man' objectFit='contain' width={160} height={160} />
          <button><IoIosArrowForward /></button>
         </div>
         <h3 className={styles.name}>Reagan Martin</h3>
         <p className={styles.testimonial}>I have been buying wine from you for over a year now. Never had a problem with delivery or product replacement. Friendly staff and a huge range of products. Thank you for your work</p>
         <p className={styles.city}>Sweden, Wemdalen</p>
       </div>
      </div>
     </div>
    </section>
  )
}

export default HomeTestimonial