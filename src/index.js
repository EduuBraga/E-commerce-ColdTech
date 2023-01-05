import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsCartProvider } from './Provider/ProductsCartProvider';

import { ScrollToTop } from './Components/ScrollToTop';
import { GlobalStyles } from './styles/GlobalStyles';
import { PageHome } from './pages/PageHome';
import { PageExplore } from './pages/PageExplore';
import { PageContact } from './pages/PageContact';
import { PageError } from './pages/PageError';
import { PageCheckout } from './pages/PageCheckout';
import { PageProducts } from './pages/PageProducts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsCartProvider>
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/explore' element={<PageExplore />} />
        <Route path='/contact' element={<PageContact />} />
        <Route path='/checkout' element={<PageCheckout />} />
        <Route path='/explore/:title' element={ <PageProducts />}/>
        <Route path='*' element={<PageError />} />
      </Routes>

      <GlobalStyles />
    </Router>
  </ProductsCartProvider>
);
