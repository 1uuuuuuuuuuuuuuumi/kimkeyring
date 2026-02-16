import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({children}) {
  const [cartItems, setCartItems] = useState([])

  // 장바구니에 상품 추가
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // 이미 장바구니에 있는 상품인지 확인
      const existingItem = prevItems.find(item => item.id === product.id)

      if(existingItem) {
        // 이미 있으면 수량만 증가
        return prevItems.map(item =>
          item.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item
        )
      } else {
        // 없으면 새로 추가 (수량1)
        return [...prevItems, {...product, quantity: 1}]
      }
    })
  }

  // 장바구니에서 상품 삭제
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  // 수량 변경
  const updateQuantity = (id, newQuantity) => {
    if(newQuantity < 1) return
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, quantity: newQuantity} : item
      )
    )
  }

  // 장바구니 비우기
  const clearCart = () => {
    setCartItems([])
  }

  // 총 금액 계산
  const totalAmount = cartItems.reduce((sum, item) =>
    sum + (item.price * item.quantity), 0
  )

  // 총 상품 개수
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalAmount
    }}>
      {children}
    </CartContext.Provider>
  )
}

// useCart 훅 (편리용)
export function useCart() {
  const context = useContext(CartContext)
  if(!context) {
    throw new Error('useCart는 CartProvider 내에서 사용해야 합니다')
  }
  return context
}