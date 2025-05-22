import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { AuthProvider } from './context/AuthContext'
import { PrivateRoute } from './routes/PrivateRoute'

function Dashboard() {
  return <div className="p-4">Bem-vindo ao painel do TaskFlow</div>
}

export function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
