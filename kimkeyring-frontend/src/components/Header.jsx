import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const navigate = useNavigate()
  const {totalItems} = useCart()

  return (
    <header style={{
      padding: '20px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <img 
        src="/logo.png"
        alt="김키링이의서랍"
        onClick={() => navigate('/')}
        style={{height: '60px', cursor: 'pointer'}}
      />
      <nav style={{display: 'flex', gap: '10px'}}>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '8px',
            cursor: 'pointer',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        >
          전체 상품
        </button>

        <button
          onClick={() => navigate('/signup')}
          style={{
            padding: '8px 16px',
            backgroundColor: 'white',
            color: '#ff6b9d',
            border: '2px solid #ff6b9d',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          회원가입
        </button>

        <button
          onClick={() => navigate('/cart')}
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            backgroundColor: '#ff6b9d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}>
            장바구니 {totalItems > 0 && `(${totalItems})`}
        </button>

        <button
          onClick={() => navigate('/login')}
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        >
          로그인
        </button>
      </nav>
    </header>
  )
}

export default Header;