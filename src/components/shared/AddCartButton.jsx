import React from 'react';

function AddCartButton({listItems, handleAddProduct}) {

  return(
  <div>
    <a href="#" className="btn btn-success" onClick={()=>handleAddProduct(listItems)}>Add to cart</a>
  </div>
  );
}

export default AddCartButton;
