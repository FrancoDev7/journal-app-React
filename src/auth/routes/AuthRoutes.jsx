import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages/"


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      {/* Si navega a cualquier pagina que no sea login o register entra a esta ruta que lo redirije a el login */}
      <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
