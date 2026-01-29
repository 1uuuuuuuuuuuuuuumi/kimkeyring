import { data, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"

function Home() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  // 백엔드 API에서 상품 데이터 가져오기
  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data => {
        // DB 데이터를 Frontend 형식에 맞게 변환
        const formattedProducts = data.map(product => ({
          id: product.productId,
          name: product.name,
          price: product.price,
          emoji: product.imageUrl
        }))
        setProducts(formattedProducts)
      })
      .catch(error => console.error('상품 조회 실패:', error))
  }, [])

  return (
    <div>
      <Header />
      <main style={{padding: '40px', maxWidth: '1200px', margin: '0 auto'}}>
        <h2 style={{marginBottom: '24px'}}>전체 상품</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          {products.map(product => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              style={{cursor: 'pointer'}}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home