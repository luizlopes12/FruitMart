import React, {useState, useEffect} from 'react';
import teste from '../services/api/teste.json'
import ItemCard from './shared/ItemCard';
import Api from '../services/Api'
import axios from 'axios';
// import Api from '../services/Api';
function List() {
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
    <div>
        {teste.map((item, key)=>{
            return(
                <ItemCard name={item.name} key={key}/>
            );
        })}
    </div>
  );
}

export default List;
