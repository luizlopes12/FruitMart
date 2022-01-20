import React from 'react';
import axios from 'axios';

const Api = axios.create({
    /*
    https://www.fruityvice.com/doc/index.html
    
    */
    baseURL: 'https://www.fruityvice.com/api'
})
export default Api;