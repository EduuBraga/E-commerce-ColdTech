import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductsCartProvider } from './Provider/ProductsCartProvider'

import { ScrollToTop } from './Components/ScrollToTop'
import { GlobalStyles } from './styles/GlobalStyles'
import { PageHome } from './pages/PageHome'
import { PageExplorar } from './pages/PageExplorar'
import { PageContact } from './pages/PageContact'
import { PageNotebook } from './pages/PageNotebooks'
import { PageCPUs } from './pages/PageCPUs'
import { PageAccessories } from './pages/PageAccessories'
import { PageMonitores } from './pages/PageMonitores'
import { PageError } from './pages/PageError'
import { PageCheckout } from './pages/PageCheckout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ProductsCartProvider>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/explorar' element={<PageExplorar />} />
        <Route path='/contact' element={<PageContact />} />
        <Route path='/checkout' element={<PageCheckout />} />
        <Route path='/explorar/notebooks' element={<PageNotebook />} />
        <Route path='/explorar/cpus' element={<PageCPUs />} />
        <Route path='/explorar/accessories' element={<PageAccessories />} />
        <Route path='/explorar/monitores' element={<PageMonitores />} />
        <Route path='*' element={<PageError />} />
      </Routes>
      <GlobalStyles />
    </Router>
  </ProductsCartProvider>
)
