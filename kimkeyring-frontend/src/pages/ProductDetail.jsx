import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from '../components/Header'
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

function ProductDetail()  {
  const {id} = useParams() // URL에서 상품ID 가져오기
  const navigate = useNavigate()
  const {addToCart} = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  // 백엔드 API에서 상품 데이터 가져오기
  useEffect(() => {
    fetch(`http://localhost:8080/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        // DB 데이터를 프론트 형식에 맞게 변환
        const formattedProduct = {
          id: data.productId,
          name: data.name,
          price: data.price,
          emoji: data.imageUrl,
          description: data.description
        }
        setProduct(formattedProduct)
        setLoading(false)
      })
      .catch(error => {
        console.error('상품 조회 실패:', error)
        setLoading(false)
      })
  }, [id])

  if(loading){
    return <div>로딩 중...</div>
  }

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
      <Footer />
    </div>
  )
}

export default ProductDetail;