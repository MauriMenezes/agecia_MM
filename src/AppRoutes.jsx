import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React, { useContext } from "react"
import Home from './pages/homePage';
import Login from './pages/loginPage';
import Register from './pages/registerPage';
import { AuthProvider, AuthContext } from './context/auth';
import Destino from './pages/Destinos';
import Pacotes from './pages/Pacotes';
import Ofertas from './pages/Ofertas';
import Contato from './pages/Contato';

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)
    if (loading) {
      return <div>Carregando...</div>
    }
    if (!authenticated) {
      return <Navigate to="/login" />
    }
    return children
  }
  return (
    <Router>
      <AuthProvider >
        <Routes>
          <Route
            exact path='/'
            element={
              <Home />
            } >
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/destino' element={<Destino />} />
          <Route path='/pacotes' element={<Pacotes />} />
          <Route path='/ofertas' element={<Ofertas />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </AuthProvider>
    </Router>

  )

}
export default AppRoutes;