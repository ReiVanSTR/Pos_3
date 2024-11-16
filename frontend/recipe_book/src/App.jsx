import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Loading from "./components/Loading";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFount"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login"/>
}


function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route 
        path = "/"
        element = {
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
