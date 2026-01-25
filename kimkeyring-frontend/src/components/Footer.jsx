function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f8f9fa',
      borderTop: '1px solid #eee',
      padding: '40px 20px',
      marginTop: '80px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '32px'
      }}>
        {/* 회사 정보 */}
        <div>
          <h3 style={{fontSize: '18px', marginBottom: '16px', fontWeight: 'bold'}}>
            김키링이의 서랍
          </h3>
          <p style={{fontSize: '14px', color: '#666', lineHeight: '1.6'}}>
            키링세상 키링천국 키링최고 키링만세 키링나라
            <br />
            이 세상 모든 가방의 주렁주렁을 책임지겠습니다!
          </p>
        </div>

        {/* 고객센터 */}
        <div>
          <h4 style={{fontSize: '16px', marginBottom: '16px', fontWeight: 'bold'}}>
            고객센터
          </h4>
          <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
            <li style={{marginBottom: '8px'}}>
              <a href="#" style={{fontSize: '14px', color: '#666', textDecoration: 'none'}}>
                공지사항
              </a>
            </li>
            <li style={{marginBottom: '8px'}}>
              <a href="#" style={{fontSize: '14px', color: '#666', textDecoration: 'none'}}>
                자주 묻는 질문
              </a>
            </li>
            <li style={{marginBottom: '8px'}}>
              <a href="#" style={{fontSize: '14px', color: '#666', textDecoration: 'none'}}>
                1:1 문의
              </a>
            </li>
          </ul>
        </div>

        {/* 쇼핑 정보 */}
        <div>
          <h4 style={{fontSize: '16px', marginBottom: '16px', fontWeight: 'bold'}}>
            쇼핑 정보
          </h4>
          <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
            <li style={{marginBottom: '8px'}}>
              <a href="#" style={{fontSize: '14px', color: '#666', textDecoration: 'none'}}>
                이용약관
              </a>
            </li>
            <li style={{marginBottom: '8px'}}>
              <a href="#" style={{fontSize: '14px', color: '#666', textDecoration: 'none'}}>
                개인정보처리방침
              </a>
            </li>
            <li style={{marginBottom: '8px'}}>
              <a href="#" style={{fontSize: '14px', color: '#666', textDecoration: 'none'}}>
                배송/교환/반품
              </a>
            </li>
          </ul>
        </div>

        {/* SNS */}
        <div>
          <h4 style={{fontSize: '16px', marginBottom: '16px', fontWeight: 'bold'}}>
            SNS
          </h4>
          <div style={{display: 'flex', gap: '12px'}}>
            <a href="#" style={{fontSize: '24px', textDecoration: 'none'}}>📷</a>
            <a href="#" style={{fontSize: '24px', textDecoration: 'none'}}>🐦</a>
            <a href="#" style={{fontSize: '24px', textDecoration: 'none'}}>📘</a>
          </div>
        </div>
      </div>

      {/* 저작권 */}
      <div style={{
        maxWidth: '1200px',
        margin: '32px auto 0',
        paddingTop: '24px',
        borderTop: '1px solid #ddd',
        textAlign: 'center',
        fontSize: '14px',
        color: '#999'
      }}>
        <p>© 2025 김키링이의서랍. All rights reserved.</p>
        <p style={{marginTop: '8px'}}>
          Made with 💖 by 👧🏿
        </p>
      </div>
    </footer>
  )
}

export default Footer