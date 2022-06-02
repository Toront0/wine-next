import React from 'react'
import styles from './ImgSection.module.css'
import Image from 'next/image'
import SecondaryButton from './SecondaryButton'

const ImgSection = ({ className, href, title, description, img, btn, textOrder }) => {
  return (
    <section className={`${styles.section} ${className}`}> 
     <div className={`${styles.wrapper} container`}>
      <div className={`${styles['text-block']} ${textOrder}`}>
       <h2 className='title'>{title}</h2>
       {description}
       {href && <SecondaryButton href={href}>{btn}</SecondaryButton>}
      </div>
      <div className={styles['img-block']}>
       <Image src={img} alt='our-sotry img' layout='fill' objectFit='cover' placeholder='blur' />
      </div>
     </div>
    </section> 
  )
}

export default ImgSection