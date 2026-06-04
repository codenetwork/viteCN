import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import AnimatedCursor from './component/cursor';

ReactDOM.render(
  <BrowserRouter>
    <div id="root">
      <Navbar />
      <div
        style={{
          paddingTop: '50px',
        }}
      >
        <main>
          <App />
        </main>
      </div>
      <Footer />
    </div>
  </BrowserRouter>,

  document.getElementById('root'),
);
