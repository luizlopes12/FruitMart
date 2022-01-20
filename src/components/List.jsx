import React, {useState, useEffect} from 'react';
import '../styles/bootstrap.min.css'
import '../styles/style.css'
import ItemCard from './shared/ItemCard';
import Api from '../services/Api'
import axios from 'axios';
// import Api from '../services/Api';
function List({listItems, handleAddProduct}) {
    /*
    useEffect(()=>{
        Api.get('/fruit/all')
        .then((response)=>{
            console.log("Foi")
        }).catch((error)=>{
            console.log(error)
        })
    }, [])
    */
  return (
    <div className="container">
    <div className="row d-flex justify-content-around">
        {listItems.map((item, key)=>{
            return(
                <ItemCard listItems={item} key={key} handleAddProduct={handleAddProduct}/>
            );
        })}
    </div>
    </div>
  );
}

export default List;
