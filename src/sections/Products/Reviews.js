import React from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import styles from './Reviews.module.css'

const Reviews = () => {
  return (
    <section className={styles.section}>
     <div className={`${styles.wrapper} container`}>
      <h2 className="title">Reviews</h2>
      <div className={styles.reviews}>
       <Review name='Simone Franco' date='March 22' message='Wine was the best investment I ever made. Wow what great service, I love it!'  />
      </div>
      <form className={styles.form}>
      <textarea placeholder='Your Message' />
      <div className={styles.button}>
       <PrimaryButton href='contact'>send the message</PrimaryButton>
      </div>
      </form>
     </div>
    </section> 
  )
}

export default Reviews

export const Review = ({ name, date, message }) => {
 return <article className={styles.review}>
  <div className={styles['review-head']}>
   <h4 className={styles.name}>{name}</h4>
   <span className={styles.date}>{date}</span>
  </div>
  <p className={styles.message}>{message}</p>
 </article>
}