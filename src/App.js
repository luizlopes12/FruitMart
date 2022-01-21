import React, {Fragment, useState, useEffect} from 'react'
import './styles/bootstrap.min.css'
import './styles/style.css'
import teste from './services/api/teste.json'
import Header from './components/Header'
import PageRoutes from './components/routes/PageRoutes'
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
    const [cartItems, setCartItems] = useState([])
    const handleAddProduct = (product)=>{
     const productExists = cartItems.find((product)=> product.id === teste.id)
     productExists?
       setCartItems(cartItems.map((product)=>product.id === teste.id ? {...productExists, quantity: productExists.quantity + 1}: product))
     :
       setCartItems(...cartItems, {...teste, quantity: 1})
    }
    return(
      <Fragment>
        <Router>
        <Header/>
        <PageRoutes listItems={teste} cartItems={cartItems} handleAddProduct={handleAddProduct}/>
        </Router>
      </Fragment>
  );
}

export default App;
