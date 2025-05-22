import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  function login({ email, password }) {
    if (email === 'admin@taskflow.com' && password === '123456') {
      const fakeUser = { name: 'Admin', email }
      setUser(fakeUser)
      navigate('/')
    } else {
      alert('Credenciais inválidas')
    }
  }

  function logout() {
    setUser(null)
    navigate('/login')
  }

  const isAuthenticated = !!user

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
