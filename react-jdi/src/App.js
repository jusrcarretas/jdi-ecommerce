import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductCatalogs from './components/Home/ProductCatalogs';
import ProductDetails from './components/Product/ProductDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container main">
          <Route path="/" component={ProductCatalogs} exact/>
          <Route path="/categories/:categoryId" component={ProductCatalogs}/>
          <Route path="/products/:productId" component={ProductDetails}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
