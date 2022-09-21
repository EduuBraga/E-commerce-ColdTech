import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { GlobalStyles } from './styles/GlobalStyles';
import { PageMain } from './pages/PageMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<PageMain />} />
    </Routes>
    <GlobalStyles />
  </Router>
);

