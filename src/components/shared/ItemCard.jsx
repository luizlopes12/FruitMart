import React from "react";
import AddCartButton from "./AddCartButton";
import {BrowserRouter as Router,Route, Routes, Link} from 'react-router-dom'
import "../../styles/bootstrap.min.css";
import "../../styles/style.css";
function ItemCard({listItems, handleAddProduct}) {
  return (
    <div className="col-sm-3 mx-sm mx-0 mt-5 col-12" key={listItems.id}>
      <div className="item-card text-center">
        <img src={require('../../img/teste-img.jpg')} className="card-img-top" alt="Imagem do produto" />
        <div className="card-body">
          <h5 className="card-title">{listItems.name}</h5>
          <p className="card-text">
          </p>
          <AddCartButton listItems={listItems} handleAddProduct={handleAddProduct}/>
          {/* <a href="#" className="btn btn-success">View More</a>
          <a href="#" className="btn btn-success">+</a> */}
          {/* <Link to={`/product/:${data.id}`} className="btn btn-success">
            view more
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
