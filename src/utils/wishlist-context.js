import React, { useReducer, useEffect } from "react";




const initialState = {
 items: []
}

const reducer = (state, action) => {
 if (action.type === 'ADD') {
  const updatedItems = state.items.concat(action.payload)
  return {
   items: updatedItems
  }
 }

 return initialState
}

export const WishlistContext = React.createContext({
 items: [],
 addItemToWishlist: (item) => {}
})



const WishListProvider = ({ children }) => { 
 const [state, dispatch] = useReducer(reducer, initialState)

 const addItemToWishlist = (item) => {

  dispatch({ type: 'ADD', payload: item })
 }


 const contextValue = {
  items: state.items,
  addItemToWishlist: addItemToWishlist
 }


 return <WishlistContext.Provider value={contextValue}>{children}</WishlistContext.Provider>
}

export default WishListProvider

