import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Header() {
  const navigate = useNavigate()
  const {totalItems} = useCart()
  const {user, logout, isLoggedIn} = useAuth()

  // 로그아웃 핸들러
  const handleLogout = () => {
    if(window.confirm('로그아웃 하시겠습니까?')){
      logout()
      alert('로그아웃 되었습니다.')
      navigate('/')
    }
  }

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

        {/* 로그인 상태에 따라 다른 버튼 표시 */}
        {isLoggedIn ? (
          // 로그인 후
          <>
            <span style={{
              padding: '8px 16px',
              color: '#666',
              fontWeight: 'bold'
            }}>
              {user.name}님
            </span>

            <button
              onClick={handleLogout}
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          // 로그인 전
          <>
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
          </>
        )}

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
      </nav>
    </header>
  )
}

export default Header;