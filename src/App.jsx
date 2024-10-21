// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/checkout/checkout';
import { CartProvider } from './components/ItemDetail/cartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda" />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;