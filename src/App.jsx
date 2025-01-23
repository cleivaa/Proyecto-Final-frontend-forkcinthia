import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Header from './assets/components/Header';
import ProductList from './assets/components/ProductList';
import Footer from './assets/components/Footer';
import products from "../data/products";




const App = () => {
    return (
        <Router>
        
            <div>
            
            <Navbar />
            <Header />
            <ProductList products={products} />
           
            <Footer />
            </div>

        </Router>
    );
};

export default App;