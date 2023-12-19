import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { ProductList } from './components/ProductList/ProductList'
import { ProductDetailContainer } from './components/ProductDetailContainer/ProductDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <>
   <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={ <ProductList/> } />

        <Route path="/productos/:categoryId" element={ <ProductList/> } />

        <Route path="/item/:itemId" element={ <ProductDetailContainer/> } />

        <Route path="*" element={ <Navigate to={"/"}/> }/>
      </Routes>

   </BrowserRouter>


    </>
  )
}

export default App
