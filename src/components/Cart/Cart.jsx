import React from "react";

function Cart({ cartItems, handleAddProduct }) {
  return (
    <div className="cart-items">
      <div className="cart-items-header">Your Shopping Cart</div>
      {cartItems.length === 0 && (
        <div className="cart-items-empty">No items added.</div>
      )}
      <div>
        {cartItems.map((item) => {
          <div key={item.id} className="cart-items-list">
            <div className="item-card text-center">
              <img
                src={require("../../img/teste-img.jpg")}
                className="card-img-top"
                alt="Imagem do produto"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Cart;
