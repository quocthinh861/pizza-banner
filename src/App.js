import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero'
import Products from './components/Products'
import { GlobalStyle } from './GlobalStyles'
import { productData, productDataTwo} from './components/Products/data'
import Feature from './components/Feature'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
        <GlobalStyle></GlobalStyle>
        <Hero></Hero>
        <Products heading='Chọn món ưu thích nào' data={ productData }></Products>
        <Feature></Feature>
        <Products heading='Món quà nhỏ cho bạn' data={ productDataTwo }></Products>
        <Footer></Footer>
    </Router>
  )
}

export default App
