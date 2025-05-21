import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { AuthProvider } from './context/AuthContext'

function Dashboard() {
  return <div className="p-4">Bem-vindo ao painel do TaskFlow</div>
}

export function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
