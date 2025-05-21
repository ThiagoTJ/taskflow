import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export function App() {

  return (
   <Router>
    <div className="min-hscreen bg-gray-100 text-gray-900">
      <Routes>
        <Route path="/" element={<div className="p-4">Dashboard (em construção)</div>}/>
        <Route path="/login" element={<div className="p-4">Login Page</div>}/>
      </Routes>
    </div>
   </Router>
  )
}


