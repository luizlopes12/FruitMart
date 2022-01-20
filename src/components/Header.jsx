import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/bootstrap.min.css'
import '../styles/style.css'
function Header() {
  return (
     <div className="header container-fluid bg-light">
         <nav className="container navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    <img className='pb-2' src={require('../img/logo.png')} alt="Logo Frexco"/>
                    <span>FruitMart</span>
                    </Link>
                <form className="d-flex">
                    <Link to='/cart' className="btn btn-sm btn-success fs-6">Cart</Link>
                </form>
            </div>
        </nav>
     </div>
  );
}

export default Header;
