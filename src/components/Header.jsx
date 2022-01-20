import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/style.css'
function Header() {
  return (
     <div className="header container-fluid bg-light">
         <nav className="container navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img className='pb-2' src={require('../img/logo.png')} alt="Logo Frexco"/>
                    <span>FruitMart</span>
                    </a>
                <form className="d-flex">
                <button className="btn btn-success" type="submit">Carrinho</button>
                </form>
            </div>
        </nav>
     </div>
  );
}

export default Header;
