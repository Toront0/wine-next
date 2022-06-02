import React, { useState } from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai'
import { CgHeart } from 'react-icons/cg'

const NavBar = ({ className }) => {
 const [open, setOpen] = useState(false)


  return (
    <header className={`${styles.header} ${className}`}>
     <div className={styles.wrapper}>
      <div className={` ${styles.hamburger} ${open && styles.active}`} onClick={() => setOpen(prev => !prev)}>
       <span className={styles.line}></span>
       <span className={styles.line}></span>
      </div>
      <Link href='/'>
       <a className={styles.logo}>buenos arte maria</a>
      </Link>
      <div className={styles.icons}>
       <div className={styles.user}>
        <h4>John Doe</h4>
        <button className='user-icon'>
         <AiOutlineUser />
        </button>
        </div>
        <Link href='/wishlist' passHref>
          <button className={styles.heart}>
          <CgHeart />
        </button>
        </Link>
        <Link href='/cart' passHref>
          <button>
          <AiOutlineShopping />
        </button>
        </Link>

      </div>
     </div>
      {open && <nav className={styles.nav}>
          <ul className={styles.links}>
            <li onClick={() => setOpen(false)}>
              <Link href='/'><a className={styles.link}>Home</a></Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href='products'><a className={styles.link}>Shop</a></Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href='contact'><a className={styles.link}>Contact</a></Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href='our-story'><a className={styles.link}>Our Story</a></Link>
            </li>
          </ul>
        </nav>}
    </header>
  )
}

export default NavBar