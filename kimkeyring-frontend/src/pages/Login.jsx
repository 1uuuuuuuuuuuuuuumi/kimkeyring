import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

function Login(){
  const navigate = useNavigate()

  // 폼 데이터 상태
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // 로그인 제출
  const handleSubmit = async (e) => {
    e.preventDefault()

    // 필수 항목 확인
    if(!formData.email || !formData.password){
      alert('이메일과 비밀번호를 입력해주세요.')
      return
    }

    try{
      // 백엔드 로그인 API 호출
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email: formData.email,
        password: formData.password
      })

      // 로그인 성공
      console.log('로그인 성공:', response.data)
      alert(`${response.data.name}님 환영합니다!`)

      // TODO: 로그인 상태 저장 (Context)

      navigate('/') // 메인 페이지로 이동

    } catch(error){
      console.error('로그인 오류:', error)
      if(error.response){
        // 서버 에러 응답
        alert('이메일 또는 비밀번호가 올바르지 않습니다.')
      } else if(error.request){
        // 네트워크 에러
        alert('서버 응답이 없습니다. 서버가 실행 중인지 확인해주세요.')
      } else {
        // 기타 오류
        alert('로그인 중 오류가 발생했습니다.')
      }
    }
  }

  return (
    <div>
      <Header />
      <main style={{padding: '40px', maxWidth: '500px', margin: '0 auto'}}>
        <h2 style={{marginBottom: '24px', textAlign: 'center'}}>로그인</h2>

        {/* 로그인 폼 */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>

          {/* 이메일 */}
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
              이메일
            </label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="test@email.com"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
              required
            />
          </div>

          {/* 비밀번호 */}
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
              비밀번호
            </label>
            <input 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력하세요"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
              required
            />
          </div>

          {/* 버튼 영역 */}
          <div style={{display: 'flex', gap: '12px', marginTop: '8px'}}>
            {/* 취소 버튼 */}
            <button
              onClick={() => navigate('/')}
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
              취소
            </button>

            {/* 로그인 버튼 */}
            <button
              onClick={handleSubmit}
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
              로그인
            </button>
          </div>

          {/* 회원가입 링크 */}
          <div style={{textAlign: 'center', marginTop: '16px'}}>
            <span style={{color: '#666'}}>아직 회원이 아니신가요?</span>
            <span
              onClick={() => navigate('/signup')}
              style={{
                color: '#ff6b9d',
                fontWeight: 'bold',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              회원가입
            </span>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Login