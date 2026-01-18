import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

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
        style={{height: '60px', cursor: 'pointer'}}
      />
      <nav>
        <button style={{marginLeft: '10px', padding: '8px 16px', cursor: 'pointer'}}>
          전체 상품
        </button>
        <button
          onClick={() => navigate('/cart')}
          style={{marginLeft: '10px', padding: '8px 16px', cursor: 'pointer'}}>
            장바구니
        </button>
        <button style={{marginLeft: '10px', padding: '8px 16px', cursor: 'pointer'}}>
          로그인
        </button>
      </nav>
    </header>
  )
}

export default Header;