import { useParams, useNavigate } from "react-router-dom";
import Header from '../components/Header'
import { useCart } from "../context/CartContext";

function ProductDetail()  {
  const {id} = useParams() // URL에서 상품ID 가져오기
  const navigate = useNavigate()
  const {addToCart} = useCart()

  // 더미 상품 데이터
  const products = [
    {id: 1, name: '곰돌이 키링', price: 12000, emoji: '🧸', description: '귀여운 곰돌이 키링입니다. 가방이나 파우치에 달아보세요!'},
    {id: 2, name: '별똥별 키링', price: 9000, emoji: '⭐', description: '반짝이는 별똥별 키링! 소원을 빌어보세요.'},
    {id: 3, name: '하트 키링', price: 8000, emoji: '💖', description: '사랑스러운 핑크 하트 키링입니다.'},
    {id: 4, name: '구름 키링', price: 10000, emoji: '☁️', description: '폭닥폭닥 포근한 구름 모양의 키링입니다.'},
    {id: 5, name: '달 키링', price: 11000, emoji: '🌙', description: '신비로운 달 키링입니다.'},
    {id: 6, name: '꽃 키링', price: 9500, emoji: '🌸', description: '예쁜 벚꽃 키링입니다. 봄에 찰떡!!'},
  ]

  const product = products.find(p => p.id === parseInt(id))

  if(!product){
    return <div>상품을 찾을 수 없습니다.</div>
  }

  return (
    <div>
      <Header />
      <main style={{padding: '40px', maxWidth: '1200px', margin: '0 auto'}}>
        <button
          onClick={() => navigate('/')}
          style={{
            marginBottom: '20px',
            padding: '8px 16px',
            cursor: 'pointer'
          }}
        >
          ← 목록으로
        </button>

        <div style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'flex-start'
        }}>
          {/* 상품 이미지 */}
          <div style={{
            width: '400px',
            height: '400px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '120px'
          }}>
            {product.emoji}
          </div>

          {/* 상품 정보 */}
          <div style={{flex: 1}}>
            <h1 style={{fontSize: '32px', marginBottom: '16px'}}>
              {product.name}
            </h1>
            <p style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#ff6b9d',
              marginBottom: '24px'
            }}>
              {product.price.toLocaleString()}원
            </p>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#666',
              marginBottom: '32px'
            }}>
              {product.description}
            </p>

            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <button
                onClick={() => {
                  addToCart(product)
                  alert('장바구니에 담았습니다!')
                }}
                style={{
                  flex: 1,
                  padding: '16px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  backgroundColor: 'white',
                  color: '#ff6b9d',
                  border: '2px solid #ff6b9d',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                장바구니 담기
              </button>

              <button
                onClick={() => alert('바로 구매 기능은 준비중입니다!')}
                style={{
                  flex: 1,
                  padding: '16px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  backgroundColor: '#ff6b9d',
                  color: 'white',
                  border: '2px solid #ff6b9d',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                바로 구매
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductDetail;