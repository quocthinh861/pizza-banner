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
        <Products heading='Choose your favourite' data={ productData }></Products>
        <Feature></Feature>
        <Products heading='Sweet gifts for you' data={ productDataTwo }></Products>
        <Footer></Footer>
    </Router>
  )
}

export default App
