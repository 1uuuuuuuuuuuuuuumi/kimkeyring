import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"
import { useState } from "react"
import axios from "axios"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Order(){
  const navigate = useNavigate()
  const {cartItems, totalAmount, clearCart} = useCart()
  const {user, isLoggedIn} = useAuth()

  // 배송지 정보
  const [shippingInfo, setShippingInfo] = useState({
    address: user?.address || '',
    addressDetail: user?.addressDetail || ''
  })

  // 로그인 안했으면 로그인 페이지로
  if(!isLoggedIn){
    alert('로그인이 필요합니다.')
    navigate('/login')
    return null
  }

  // 장바구니 비었으면 홈으로
  if(cartItems.length === 0){
    alert('장바구니가 비어있습니다.')
    navigate('/')
    return null
  }

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const {name, value} = e.target
    setShippingInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // 주문하기
  const handleOrder = async () => {
    // 1. 배송지 정보 확인
    if(!shippingInfo.address) {
      alert('배송지를 입력해주세요.')
      return
    }

    try {
      // 2. 백엔드 API 호출
      const response = await axios.post('http://localhost:8080/api/orders',{
        userId: user.userId,
        totalPrice: totalAmount,
        address: shippingInfo.address,
        addressDetail: shippingInfo.addressDetail,
        items: cartItems.map(item => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price
        }))
      })

      console.log('주문 성공:', response.data)
      alert('주문이 완료되었습니다!')
      clearCart()   // 장바구니 비우기
      navigate('/') // 홈으로 이동

    } catch (error) {
      console.error('주문 오류:', error)
      alert('주문 중 오류가 발생했습니다.')
    }
  }

  return (
    <div>
      <Header />
      <main style={{padding: '40px', maxWidth: '800px', margin: '0 auto'}}>
        <h2 style={{marginBottom: '24px'}}>주문하기</h2>

        {/* 주문 상품 목록 */}
        <div style={{marginBottom: '32px'}}>
          <h3 style={{marginBottom: '16px'}}>주문 상품</h3>
          {cartItems.map(item => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px',
                backgroundColor: '#f9f9f9',
                borderRadius: '4px',
                marginBottom: '8px'
              }}
            >
              <div>
                <span style={{fontSize: '24px', marginRight: '12px'}}>{item.emoji}</span>
                <span style={{fontWeight: 'bold'}}>{item.name}</span>
                <span style={{color: '#666', marginLeft: '8px'}}>x {item.quantity}</span>
              </div>
              <span style={{fontWeight: 'bold'}}>
                {(item.price * item.quantity).toLocaleString()}원
              </span>
            </div>
          ))}
        </div>

        {/* 배송지 정보 */}
        <div style={{marginBottom: '32px'}}>
          <h3 style={{marginBottom: '16px'}}>배송지 정보</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <input 
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleChange}
              placeholder="기본 주소"
              style={{
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
            <input 
              type="text"
              name="addressDetail"
              value={shippingInfo.addressDetail}
              onChange={handleChange}
              placeholder="상세 주소"
              style={{
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
          </div>
        </div>

        {/* 총 금액 */}
        <div style={{
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          marginBottom: '24px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            <span>총 결제 금액</span>
            <span style={{color: '#ff6b9d'}}>{totalAmount.toLocaleString()}원</span>
          </div>
        </div>

        {/* 버튼 */}
        <div style={{display: 'flex', gap: '12px'}}>
          <button
            onClick={() => navigate('/cart')}
            style={{
              flex: 1,
              padding: '16px',
              fontSize: '18px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: '#666',
              border: '2px solid #ddd',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            장바구니로
          </button>

          <button
            onClick={handleOrder}
            style={{
              flex: 1,
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
      </main>
      <Footer />
    </div>
  )
}

export default Order