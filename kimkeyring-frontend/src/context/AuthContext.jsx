import { createContext, useContext, useEffect, useState } from "react";

// Context 생성
const AuthContext = createContext()

// Provider 컴포넌트
export function AuthProvider({children}){
  // 로그인 상태 (사용자 정보)
  const [user, setUser] = useState(null)

  // 컴포넌트 마운트 시 localStorage에서 로그인 정보 복원
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if(savedUser){
      setUser(JSON.parse(savedUser))
    }
  }, [])

  // 로그인 함수
  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  // 로그아웃 함수
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  // Context에 제공할 값
  const value = {
    user, // 현재 로그인한 사용자 정보
    login,  // 로그인 함수
    logout,  // 로그아웃 함수
    isLoggedIn: !!user // 로그인 여부 (true/false)
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
// Context 사용을 위한 Hook
export function useAuth(){
  const context = useContext(AuthContext)
  if(!context){
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}