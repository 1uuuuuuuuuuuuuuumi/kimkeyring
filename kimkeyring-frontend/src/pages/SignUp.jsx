import { useNavigate } from "react-router-dom"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from "react"
import axios from "axios"

function SignUp(){
  const navigate = useNavigate()

  // 폼 데이터 상태
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phone: '',
    address: '',
    addressDetail: ''
  })

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // 회원가입 제출
  const handleSubmit = async (e) => {
    e.preventDefault()

    // 1. 비밀번호 확인
    if(formData.password !== formData.passwordConfirm){
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    // 2. 필수 항목 확인
    if(!formData.email || !formData.password || !formData.name || !formData.phone){
      alert('필수 항목을 모두 입력해주세요.')
      return
    }

    try{
      //3. 백엔드 API 호출
      const response = await axios.post('http://localhost:8080/api/users', {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        addressDetail: formData.addressDetail
      })

      // axios는 response.data로 바로 데이터에 접근
      console.log('회원가입 성공:', response.data)
      alert('회원가입이 완료되었습니다!')
      navigate('/') // 메인 페이지로 이동

    } catch (e) {
      console.error('회원가입 오류:', e)
      if(e.response){
        // 서버가 응답했지만 에러
        alert(`회원가입 실패: ${e.response.data}`)
      } else if(e.request){
        // 요청은 보냈지만 응답 없음 (네트워크 문제)
        alert('서버 응답이 없습니다. 서버가 실행 중인지 확인해주세요.')
      } else {
        // 기타 에러
        alert('회원가입 중 오류가 발생했습니다.')
      }
    }
  }

  return(
    <div>
      <Header />
      <main style={{padding: '40px', maxWidth: '600px', margin: '0 auto'}}>
        <h2 style={{marginBottom: '24px', textAlign: 'center'}}>회원가입</h2>

        {/* 회원가입 폼 */}
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
              placeholder="example@email.com"
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

          {/* 비밀번호 확인 */}
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
              비밀번호 확인
            </label>
            <input 
              type="password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              placeholder="비밀번호를 다시 입력하세요"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
          </div>

          {/* 이름 */}
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
              이름
            </label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="이름을 입력하세요"
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

          {/* 전화번호 */}
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
              전화번호
            </label>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="010-1234-5678"
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

          {/* 주소 */}
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
              주소
            </label>
            <input 
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="기본 주소"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px',
                marginBottom: '8px'
              }}
            />
            <input 
              type="text"
              name="addressDetail"
              value={formData.addressDetail}
              onChange={handleChange}
              placeholder="상세 주소"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}

export default SignUp