import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

function Cart() {
  const navigate = useNavigate()

  // 장바구니 상품 더미 데이터
  const [cartItems, setCartItems] = useState([
    {id: 1, name: '곰돌이 키링', price: 12000, emoji: '🧸', quantity: 1},
    {id: 3, name: '하트 키링', price: 8000, emoji: '💖', quantity: 2},
  ])

  // 상품 삭제
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  // 수량 변경
  const updateQuantity = (id, newQuantity) => {
    if(newQuantity < 1) return
    setCartItems(cartItems.map(item =>
      item.id === id ? {...item, quantity: newQuantity} : item
    ))
  }

  // 총 금액 계산
  const totalAmount = cartItems.reduce((sum, item) =>
    sum + (item.price * item.quantity), 0
  )

  return (
    <div>
      <Header />
      <main style={{padding: '40px', maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{fontSize: '32px', marginBottom: '32px'}}>장바구니</h1>

        {cartItems.length === 0 ? (
          <div style={{textAlign: 'center', padding: '80px 0'}}>
            <p style={{fontSize: '18px', color: '#666', marginBottom: '24px'}}>
              장바구니가 비어있습니다.
            </p>
            <button
              onClick={() => navigate('/')}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                backgroundColor: '#ff6b9d',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              쇼핑 계속하기
            </button>
          </div>
        ) : (
          <>
            {/* 장바구니 아이템 목록 */}
            {cartItems.map(item => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '20px',
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }}
              >
                {/* 상품 이미지 */}
                <div style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  marginRight: '20px'
                }}>
                  {item.emoji}
                </div>

                {/* 상품 정보 */}
                <div style={{flex: 1}}>
                  <h3 style={{fontSize: '18px', marginBottom: '8px'}}>
                    {item.name}
                  </h3>
                  <p style={{fontSize: '16px', fontWeight: 'bold', color: '#ff6b9d'}}>
                    {item.price.toLocaleString()}원
                  </p>
                </div>

                {/* 수량 조절 */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginRight: '20px'
                }}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{
                      width: '32px',
                      height: '32px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      backgroundColor: 'white'
                    }}
                  >
                    -
                  </button>
                  <span style={{fontSize: '16px', minWidth: '30px', textAlign: 'center'}}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{
                      width: '32px',
                      height: '32px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      backgroundColor: 'white'
                    }}
                  >
                    +
                  </button>
                </div>

                {/* 삭제 버튼 */}
                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    padding: '8px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    backgroundColor: 'white'
                  }}
                >
                  삭제
                </button>
              </div>
            ))}

            {/* 총 금액 */}
            <div style={{
              marginTop: '32px',
              padding: '24px',
              border: '2px solid #ff6b9d',
              borderRadius: '8px',
              backgroundColor: '#fff5f8'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <span style={{fontSize: '18px'}}>총 금액</span>
                <span style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#ff6b9d'
                }}>
                  {totalAmount.toLocaleString()}원
                </span>
              </div>
              <button
                onClick={() => alert('주문 기능은 준비중입니다!')}
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  backgroundColor: '#ff6b9d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                주문하기
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default Cart