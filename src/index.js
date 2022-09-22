import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { GlobalStyles } from './styles/GlobalStyles'
import { PageHome } from './pages/PageHome'
import { PageNotebook } from './pages/PageNotebooks'
import { PageShop } from './pages/PageShop'
import { PageCPUs } from './pages/PageCPUs'
import { PageAccessories } from './pages/PageAccessories';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<PageHome />} />
      <Route path='/shop' element={<PageShop />} />
      <Route path='/shop/notebooks' element={<PageNotebook />} />
      <Route path='/shop/cpus' element={<PageCPUs />} />
      <Route path='/shop/accessories' element={<PageAccessories />} />
      {/* <Route path='/shop/monitores' element={<PageMonitores />} /> */}
      {/* <Route path='*' element={<PageError />} /> */}
    </Routes>
    <GlobalStyles />
  </Router>
)

