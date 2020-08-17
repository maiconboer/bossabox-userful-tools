import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Tools } from './context/ToolContext';

import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
    <Tools>
      <Header />
      <Routes />
      <Footer />
    </Tools>
    </BrowserRouter>
  )
}

export default App;
