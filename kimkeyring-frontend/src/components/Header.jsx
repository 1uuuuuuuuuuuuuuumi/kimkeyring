function Header() {
  return (
    <header style={{
      padding: '20px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{margin: 0, fontSize: '24px'}}>
        🛍️ 김키링이의 서랍
      </h1>
      <nav>
        <button style={{marginLeft: '10px', padding: '8px 16px'}}>
          전체 상품
        </button>
        <button style={{marginLeft: '10px', padding: '8px 16px'}}>
          장바구니
        </button>
        <button style={{marginLeft: '10px', padding: '8px 16px'}}>
          로그인
        </button>
      </nav>
    </header>
  )
}

export default Header;