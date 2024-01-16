import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { ProductList } from './components/ProductList/ProductList'
import { ProductDetailContainer } from './components/ProductDetailContainer/ProductDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { CartProvider } from './components/context/CartContext'
import { CartView } from './components/CartView/CartView'
import { Checkout } from './components/Checkout/Checkout'

function App() {

  return (

  <CartProvider>
   <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={ <ProductList/> } />

        <Route path="/productos/:categoryId" element={ <ProductList/> } />

        <Route path="/item/:itemId" element={ <ProductDetailContainer/> } />

        <Route path="/cart" element={ <CartView/> } />

        <Route path="/checkout" element={ <Checkout/> } />

        <Route path="*" element={ <Navigate to={"/"}/> }/>
      </Routes>

   </BrowserRouter>
  </CartProvider>
  )
}

export default App
