import '../styles/globals.css'
import Footer from '../src/components/Footer'
import WishListProvider from '../src/utils/wishlist-context'
import CartContextProvider from '../src/utils/cart-context'

function MyApp({ Component, pageProps }) {
  return <>
  <CartContextProvider>
    <WishListProvider>
      <Component {...pageProps} />
    </WishListProvider>
  </CartContextProvider>
  <Footer />
  </>

}

export default MyApp
