import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/Footer'
import ProductList from './components/product-list/productList'
import { CartProvider } from "./contexts/Cart";
import Register from './components/register/Register'
import Login from './components/login/Login'
import Product from './components/product/Product'
import Cart from './components/cart/Cart';
import ProductDetails from './components/product-details/ProductDetails';
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoutes/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider value={{ count, setCount }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<ProtectedRoute> <Cart /> </ProtectedRoute>} />
      </Routes>

      <Footer />


    </CartProvider>
  )
}

export default App
