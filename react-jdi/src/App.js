import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductCatalogs from './components/Home/ProductCatalogs';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container main">
          <Route path="/" component={ProductCatalogs} exact/>
          <Route path="/categories/:categoryId" component={ProductCatalogs}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
