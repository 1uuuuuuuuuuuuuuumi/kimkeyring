import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"

function Home() {
  const navigate = useNavigate()

  // 가짜 데이터 (나중에 API로 교체!)
  const products = [
    {id: 1, name: '곰돌이 키링', price: 12000, emoji: '🧸'},
    {id: 2, name: '별똥별 키링', price: 9000, emoji: '⭐'},
    {id: 3, name: '하트 키링', price: 8000, emoji: '💖'},
    {id: 4, name: '구름 키링', price: 10000, emoji: '☁️'},
    {id: 5, name: '달 키링', price: 11000, emoji: '🌙'},
    {id: 6, name: '꽃 키링', price: 9500, emoji: '🌸'},
  ]

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
    </div>
  )
}

export default Home